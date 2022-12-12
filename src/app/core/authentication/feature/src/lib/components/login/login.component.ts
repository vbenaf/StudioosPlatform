import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'studioos-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private authService: AuthenticationService,
    private _fBuilder: FormBuilder
  ) {}

  signIn() {
    try {
      this.authService.signIn(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value
      );
    } catch (e) {
      console.log(e);
    }
  }

  _createForm() {
    return this._fBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginForm = this._createForm();
  }
}
