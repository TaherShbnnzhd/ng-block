/* بسم الله الرحمن الرحیم */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth/auth.guard';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AccountModule } from './modules/account/account.module';
import { LoginComponent } from './modules/account/login/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        loadChildren: () => import('../app/modules/home/home.module')
            .then(module => module.HomeModule),
        canLoad: [AuthGuard]
    },
    {
        path: 'report',
        loadChildren: () => import('../app/modules/report/report.module')
            .then(module => module.ReportModule),
        canLoad: [AuthGuard]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AccountModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
