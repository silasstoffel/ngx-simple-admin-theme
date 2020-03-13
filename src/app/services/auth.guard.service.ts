import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()

export class AuthGuardService implements CanActivate {
  constructor() { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return new Observable<true>();
  }

  setCanNot() : Observable<boolean> {
    // https://gitlab.com/silasstofel/sistema-longitude/-/blob/master/src/app/shared/services/auth.guard.service.ts
    return new Observable<true>();
  }

}
