import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { DashboardComponent }  from './components/dashboard/dashboard.component';
import  { SignUpComponent }  from './components/sign-up/signup.component';
import  { SignInComponent }  from './components/sign-in/signin.component';

// Services
 import { AuthGuardService } from './services/auth.guard.service'


const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

const enableTracing = false;

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
