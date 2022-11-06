/* بسم الله الرحمن الرحیم */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { HttpService } from './http/http.service';
import { AlertService } from './services/alert.service';
import { LogService } from './services/log.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageService } from './services/message.service';
import { AuthService } from './authentication/auth.service';
import { HttpErrorHandlerService } from './http/http-error-handler/http-error-handler.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent
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
    HttpService,
    AlertService,
    LogService,
    MessageService,
    HttpErrorHandlerService
  ]
})
export class CoreModule { }
