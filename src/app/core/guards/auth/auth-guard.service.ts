/* بسم الله الرحمن الرحیم */

import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  public isLoggedIn: boolean = true;

  // store the URL so we can redirect after logging in
  public redirectUrl: string | null = null;

  constructor() { }

  public logIn(): Observable<boolean> {

    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  public logOut(): void {

    this.isLoggedIn = false
  }
}
