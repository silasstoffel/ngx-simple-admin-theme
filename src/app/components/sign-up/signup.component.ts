import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['../../styles/sign.css']
})

export class SignUpComponent implements OnInit {

  signUpForm;

  constructor(
    private fb: FormBuilder,
    private utils: UtilsService,
    private router: Router,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      mobile_phone: ['']
    });
  }

  async onSubmit() {
    if (this.signUpForm.valid) {
      const data = this.signUpForm.value;

      if (data.password !== data.password_confirm) {
        this.utils.flashWarning('Senha e confirmação de senha não são identicas');
        return false;
      }
      delete data.password_confirm;
      try {
        await this.api.postAsync('/users', data);
        this.utils.flashSuccess('Conta criada com sucesso!');
        this.router.navigate(['/signin']);
      } catch (error) {
        this.utils.showHttpResponseError(error);
      }
    } else {
      this.utils.flashWarning('Todos os campos são de preenchimento obrigatório');
    }
  }

}
