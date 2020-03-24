// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '../app/shared.module';

// Components
import { AppComponent } from './components/main/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SignInComponent } from './components/sign-in/signin.component';
import { SignUpComponent } from './components/sign-up/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
