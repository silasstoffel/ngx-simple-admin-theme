import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import Session from '../models/Session';
import User from '../models/User';

@Injectable()
export class SessionService {

  sessionEmmiter = new  EventEmitter<Session>();
  authorized = false;

  constructor(private router: Router, private http: HttpClient) { }

  emitEventSession(event: Session) {
    this.sessionEmmiter.emit(event);
  }

  store(name = '@app[session]') {

  }

  start() {
      const session = new Session();
      session.authorized = true;
      session.token = 'token_data_info';
      session.expire_in = '2021-12-31T22:30:42.000';
      const user = new User();
      user.email = 'mestre@tagtec.com';
      user.group_id = 1;
      user.id = 1;
      user.name = 'Mestre dos Magos';
      session.user = user;
      return session;
  }

  destroy() {

  }

}
