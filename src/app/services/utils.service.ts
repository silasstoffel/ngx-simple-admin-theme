import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UtilsService {

  constructor(private toastr: ToastrService) { }


  flashInfo(message, title = '') {
    this.toastr.info(message, title);
  }

  flashSuccess(message, title = '') {
    this.toastr.success(message, title);
  }

  flashWarning(message, title = '') {
    this.toastr.warning(message, title);
  }

  flashError(message, title = '') {
    this.toastr.error(message, title);
  }

  showHttpResponseError(data: any, toastrAlert = true) {
    const error = {
      code: (data.status) ? data.status : null,
      error: true,
      message: 'Erro não identificado',
    };

    // error.error instanceof ErrorEvent
    if (typeof data.error.error !== 'undefined' && typeof data.error.message !== 'undefined') {
      error.message = data.error.message;
    } else if (typeof data.message !== 'undefined' && data.message !== '') {
      error.message = data.message;
    }

    if (toastrAlert) {
      this.flashError(error.message, 'Erro');
    }

    return error;
  }

}
