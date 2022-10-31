/* بسم الله الرحمن الرحیم */

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { tap } from 'rxjs';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthGuardService } from './guards/auth/auth-guard.service';
import { HttpService } from './http/http.service';
import { AlertService } from './services/alert.service';
import { LogService } from './services/log.service';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppConfigService } from './services/app-config.service';

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
    AuthenticationService,
    AuthGuard,
    AuthGuardService,
    HttpService,
    AlertService,
    LogService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      deps: [AppConfigService],
      multi: true,
      useFactory: (appConfigService: AppConfigService) => {

        return () => appConfigService.loadAppConfig()
          .pipe(tap((config) => appConfigService.setConfig(config)));
      
      }
    }
  ]
})
export class CoreModule { }
