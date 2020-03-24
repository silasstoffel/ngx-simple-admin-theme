import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Services
import { AuthGuardService } from './services/auth.guard.service';
import { SessionService } from './services/session.service';
import { UtilsService } from './services/utils.service';
import { ApiService } from './services/api.service';

// Configs
import toastConfig from '../app/config/ngx-toastr';

// Others
import { AuthHttpInterceptor } from './resources/auth-http-interceptor';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      HttpClientModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      CollapseModule.forRoot(),
      ToastrModule.forRoot(toastConfig),
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [
      CommonModule,
      BsDropdownModule,
      CollapseModule,
      ToastrModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [
      ToastrService,
      { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
      AuthGuardService,
      SessionService,
      UtilsService,
      ApiService
    ]
})

export class SharedModule { }
