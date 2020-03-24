import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { SessionService } from '../services/session.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private session: SessionService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const session = this.session.active(false, false);
    if (
      session === null ||
      !session ||
      (session && !session.authorized)
    ) {
      return next.handle(req);
    }

    const token =  `Bearer ${session.token}`;

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}

