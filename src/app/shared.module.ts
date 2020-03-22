import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

// Configs
import toastConfig from '../app/config/ngx-toastr';

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      BrowserAnimationsModule,
      ToastrModule.forRoot(toastConfig)
    ],
    exports: [
      CommonModule,
      ToastrModule,
    ],
    providers: [
      ToastrService
    ]
})

export class SharedModule { }
