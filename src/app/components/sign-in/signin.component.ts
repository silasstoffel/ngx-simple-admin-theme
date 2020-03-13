import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html'
})

export class SignInComponent implements OnInit {
  page = 'SignInComponent';
  user = {email:null, password: ''};

  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })

  constructor() {
  }

  ngOnInit() { }

  onSubmit(customerData) {
    console.log(this.contactForm.value)
  }
}
