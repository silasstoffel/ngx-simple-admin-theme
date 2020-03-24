import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { DashboardComponent }  from './components/dashboard/dashboard.component';
import  { SignUpComponent }  from './components/sign-up/signup.component';
import  { SignInComponent }  from './components/sign-in/signin.component';
import  { ProfileComponent }  from './components/profile/profile.component';

// Services
 import { AuthGuardService } from './services/auth.guard.service'

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuardService] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

const enableTracing = false;

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
