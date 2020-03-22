import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Session from '../models/Session';
import User from '../models/User';

@Injectable()
export class SessionService {

  sessionEmmiter = new  EventEmitter<Session>();
  static authorized = false;
  private static baseUrl;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {
    SessionService.baseUrl = `${environment.base_url}/auth`;
   }

  emitEventSession(event: Session) {
    this.sessionEmmiter.emit(event);
  }

  active(name = '@app[session]'): Session {
    const fs = localStorage.getItem(name);
    if (!fs) {
      // Remove local storage file
      this.destroy();
      return null;
    }
    const session = JSON.parse(fs);
    if (typeof(session.authorized) === 'undefined' || !session.authorized) {
      this.destroy();
      return null;
    }
    // Send event of all subscriptions
    this.emitEventSession(session);
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
        session.token = 'token_data_info';
        const user = new User();
        user.email = 'mestre@tagtec.com.br';
        user.id = 1;
        user.name = 'Mestre TagTec';
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

  private async authenticate(data) {
    try {
      const session = await this.http.post(SessionService.baseUrl, data).toPromise();
      return session;
    } catch (e) {
      throw e;
    }
  }

}
