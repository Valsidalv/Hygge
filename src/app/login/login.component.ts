import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../custom-validator';
import { AuthGuardService } from '../auth-guard.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  invalidCredentialMsg: string;
  username: string;
  password: string;
  retUrl: string = 'login';

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.retUrl = params.get('retUrl');
      console.log('LoginComponent/ngOnInit ' + this.retUrl);
    });
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
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


  onFormSubmit(loginForm2) {
    this.authService
      .login(loginForm2.value.username, loginForm2.value.password)
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['/profile']);
        } else {
          this.router.navigate(['login']);
        }
      });
  }
  
}
