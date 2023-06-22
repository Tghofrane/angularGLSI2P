import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  navigateToRegister(){
    this.router.navigate(["/auth/register"]);
  }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService.login(this.f?.['email'].value, this.f?.['password'].value)
      .subscribe(
        (data) => {
          this.router.navigate(["/app/home"]);
        },
        (error) => {
          this.error = error.message;
          this.loading = false;
        }
      );
  }
}
