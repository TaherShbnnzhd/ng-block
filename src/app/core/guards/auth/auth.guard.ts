/* بسم الله الرحمن الرحیم */

import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, NavigationExtras, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

/* بسم الله الرحمن الرحیم */

import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private AuthGuardService: AuthGuardService,
    private route: ActivatedRoute
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('Passed Through canActivate Guard.');

    return this.checkLogIn();
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    console.log('Passed Through canLoad Guard.');

    return this.checkLogIn();
  }

  private checkLogIn(): boolean {

    if (this.AuthGuardService.isLoggedIn) {

      return true;
    }

    return false;
  }
}
