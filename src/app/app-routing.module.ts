/* بسم الله الرحمن الرحیم */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: 'report',
    loadChildren: () => import('./modules/report/report.module')
      .then(module => module.ReportModule),
    canLoad: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
