import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session.service';
import { ApiService } from '../../services/api.service';
import { UtilsService } from '../../services/utils.service';

import ngxMask from '../../config/ngx-mask';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['../../styles/sign.css']
})

export class ProfileComponent implements OnInit {

  public profileForm;
  public ngxMask = ngxMask;

  constructor(
    private api: ApiService,
    private utils: UtilsService,
    private fb: FormBuilder,
    private session: SessionService,
  ) {}

  async ngOnInit() {
    this.utils.flashInfo('Carregando...');
    this.buildForm({});
    await this.load();
  }

  private buildForm(model: any) {
    this.profileForm = this.fb.group({
      name: [model.name, Validators.required],
      email: [model.email, Validators.required],
      password: [''],
      password_confirm: [''],
      mobile_phone: [model.mobile_phone]
    });
  }

  private async load() {
    try {
      const session = this.session.active(false);
      const user = await this.api.getAsync(`/users/${session.user.id}`);
      this.buildForm(user);
      this.utils.flashSuccess('Perfil carregado com sucesso!', null, true);
    } catch (error) {
      this.utils.showHttpResponseError(error);
    }
  }

  async onSubmit() {
    if (this.profileForm.valid) {
      const data = this.profileForm.value;

      if ((data.password || data.password_confirm) && data.password !== data.password_confirm) {
        this.utils.flashWarning('Senha e confirmação de senha não são identicas');
        return false;
      }
      delete data.password_confirm;
      try {
        await this.api.putAsync('/users', data);
        this.utils.flashSuccess('Conta atualizada com sucesso!', null, true);
        const session = this.session.active(false, false);
        session.user.name = data.name;
        session.user.email = data.email;
        this.session.emitEventSession(session);
        this.session.store(session);
      } catch (error) {
        this.utils.showHttpResponseError(error);
      }
    } else {
      this.utils.flashWarning('Todos os campos são de preenchimento obrigatório');
    }
  }
}
