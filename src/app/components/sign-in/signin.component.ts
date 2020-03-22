import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { UtilsService } from '../../services/utils.service';


@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.css']
})

export class SignInComponent implements OnInit {

  public authForm;

  constructor(
    private fb: FormBuilder,
    private session: SessionService,
    private router: Router,
    private utils: UtilsService
  ) {
    this.buildForm();
  }

  ngOnInit() {
    const session = this.session.active();
    if (session && session.authorized) {
      this.router.navigate(['/dashboard']);
    }
  }

  private buildForm() {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.authForm.valid) {
      const data = this.authForm.value;
      try {
        await this.session.start(data);
        this.utils.flashSuccess('Autenticação efetivada!');
        this.router.navigate(['/dashboard']);
      } catch (error) {
        this.utils.showHttpResponseError(error);
      }
    } else {
      this.utils.flashWarning('Todos os campos são de preenchimento obrigatório');
    }
  }

}
