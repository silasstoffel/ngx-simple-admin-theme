import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Session from '../models/Session';
import User from '../models/User';
import api from '../config/api';

@Injectable()
export class SessionService {

  sessionEmmiter = new  EventEmitter<Session>();
  static authorized = false;
  private static baseUrl;

  constructor(
    private http: HttpClient,
  ) {
    SessionService.baseUrl = `${api.api_url}/auth`;
   }

  emitEventSession(event: Session) {
    this.sessionEmmiter.emit(event);
  }

  stored(name:string = '@app[session]'): Session {
    const fs = localStorage.getItem(name);
    if (!fs) {
      return null;
    }
    const session = JSON.parse(fs);
    return session;
  }

  active(autoDestroy = true, setEventEmitter:boolean = true, name = '@app[session]'): Session {
    const session = this.stored(name);
    if (session == null) {
      if (autoDestroy) {
        // Remove local storage file
        this.destroy();
      }
      return null;
    }
    if (typeof(session.authorized) === 'undefined' || !session.authorized) {
      if (autoDestroy) {
        this.destroy();
      }
      return null;
    }
    if (setEventEmitter) {
      // Send event of all subscriptions
      this.emitEventSession(session);
    }
    return session;
  }

  store(data, name = '@app[session]') {
    localStorage.setItem(name, JSON.stringify(data));
  }

  async start(data: any) {
      try {
        if (!data.email || !data.password) {
          throw new Error('E-mail e senha são obrigatório');
        }
        const sd = await this.authenticate(data);
        SessionService.authorized = true;
        const session = new Session();
        session.authorized = true;
        session.token = sd.token;
        const user = new User();
        user.email = sd.user.email;
        user.id = sd.user.id;
        user.name = sd.user.name;
        session.user = user;
        this.store(session);
        this.emitEventSession(session);
        return session;
      } catch (e) {
        throw e;
      }
  }

  destroy(name = '@app[session]') {
    localStorage.removeItem(name);
    SessionService.authorized = false;
    const session = new Session();
    session.authorized = false;
    session.token = null;
    const user = new User();
    user.email = null;
    user.group_id = null;
    user.id = null;
    user.name = null;
    session.user = user;
    this.emitEventSession(session);
  }

  private async authenticate(data): Promise<any> {
    try {
      const session = await this.http.post(SessionService.baseUrl, data).toPromise();
      return session;
    } catch (e) {
      throw e;
    }
  }

}
