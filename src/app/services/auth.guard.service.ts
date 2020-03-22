import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SessionService } from '../services/session.service';


@Injectable()

export class AuthGuardService implements CanActivate {

  constructor(private session: SessionService, private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    // Load data session from local storage file
    const session = this.session.active();
    if (session && session.authorized) {
      return new Observable<boolean>(observer => {
        observer.next(true);
      });
    }
    this.setUnauthorized();
    return new Observable<boolean>(observer => {
      observer.next(false);
    });
  }

  setUnauthorized() {
    this.session.destroy();
    this.router.navigate(['/signin']);
  }

}
