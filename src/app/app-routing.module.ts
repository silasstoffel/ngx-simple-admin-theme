import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { DashboardComponent }  from './components/dashboard/dashboard.component';
import  { SignUpComponent }  from './components/sign-up/signup.component';
import  { SignInComponent }  from './components/sign-in/signin.component';

// Services
 import {AuthGuardService} from './services/auth.guard.service'


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService] },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
