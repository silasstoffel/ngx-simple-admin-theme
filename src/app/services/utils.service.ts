import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UtilsService {

  constructor(private toastr: ToastrService) { }

  flashInfo(message, title = '', clear = false) {
    if (clear) {
      this.flashClear();
    }
    this.toastr.info(message, title);
  }

  flashSuccess(message, title = '', clear = false) {
    if (clear) {
      this.flashClear();
    }
    this.toastr.success(message, title);
  }

  flashWarning(message, title = '', clear = false) {
    if (clear) {
      this.flashClear();
    }
    this.toastr.warning(message, title);
  }

  flashError(message, title = '', clear = false) {
    if (clear) {
      this.flashClear();
    }
    this.toastr.error(message, title);
  }

  flashClear(id?:number) {
    this.toastr.clear(id);
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
      this.flashError(error.message, 'Erro', true);
    }

    return error;
  }

}
