import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../custom-validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  
  ngOnInit() {}

  constructor(private fb: FormBuilder) {
    this.loginForm = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        email: [
          null,
          Validators.compose([Validators.email, Validators.required]),
        ],
        password: [null, Validators.compose([Validators.required])],
        passConfirm: [null, Validators.compose([Validators.required])],
      },
      {
        // check whether our password and confirm password match
        validator: CustomValidators.passwordMatchValidator,
      }
    );
  }

  onSubmit() {
    
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('form is invalid');
      return;
    }

    console.log(this.loginForm.value);
  }
}
