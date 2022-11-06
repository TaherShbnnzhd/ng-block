/* بسم الله الرحمن الرحیم */

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'block-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public message: string;

  // store the URL so we can redirect after logging in
  public redirectUrl: string | null = null;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {

    this.message = this.getMessage();
  }

  ngOnInit(): void {
  }

  /** Define message for logged state */
  public getMessage() {

    return 'Logged ' +
      (this.authService.isLoggedIn ? 'in' : 'out');
  }

  /** Log in user */
  public login() {

    this.message = 'Trying to log in ...';

    this.authService.logIn().subscribe(() => {

      this.message = this.getMessage();

      if (this.authService.isLoggedIn) {

        // Usually you would use the redirect URL from the auth service.
        // However to keep the example simple, we will always redirect to `/admin`.
        const redirectUrl =
          this.authService.redirectUrl || '/home';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // Redirect the user
        this.router.navigate([redirectUrl], navigationExtras);
      }
    });
  }

  /** Log out user */
  logout() {

    this.authService.logOut();
    this.message = this.getMessage();
  }
}
