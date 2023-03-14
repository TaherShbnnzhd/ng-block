/* بسم الله الرحمن الرحیم */

import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  public redirectUrl: string | null = null;

  constructor() {}

  /** Get Token If Exists */
  public getAuthorizationToken(): string {
    return sessionStorage.getItem('BlockToken') || '';
  }

  /** Try To Log In */
  public logIn(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => (this.isLoggedIn = true))
    );
  }

  /** Try To Log Out */
  public logOut(): void {
    sessionStorage.removeItem('BlockToken');
    this.isLoggedIn = false;
  }
}
