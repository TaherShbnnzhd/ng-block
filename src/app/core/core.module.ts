/* بسم الله الرحمن الرحیم */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthGuardService } from './guards/auth/auth-guard.service';
import { HttpService } from './http/http.service';
import { AlertService } from './services/alert.service';
import { LogService } from './services/log.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthGuardService,
    HttpService,
    AlertService,
    LogService
  ]
})
export class CoreModule { }
