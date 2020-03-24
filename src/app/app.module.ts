// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../app/shared.module';

// Components
import { AppComponent } from './components/main/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SignInComponent } from './components/sign-in/signin.component';
import { SignUpComponent } from './components/sign-up/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

// Services
import { AuthGuardService } from './services/auth.guard.service';
import { SessionService } from './services/session.service';
import { UtilsService } from './services/utils.service';
import { ApiService } from './services/api.service';

// Others
import { AuthHttpInterceptor } from './resources/auth-http-interceptor';

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
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    SharedModule
  ],
  providers: [
    AuthGuardService,
    SessionService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    UtilsService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
