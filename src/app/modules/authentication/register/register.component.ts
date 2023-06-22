import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  roles = ['Admin', 'Owner', 'Client']
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      lastName:['', [Validators.required]],
      firstName:['', [Validators.required]],
      role:['', [Validators.required]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log("Here", this.registerForm);
    
    let user = 
      {
        "email": this.f?.['email'].value,
        "firstName": this.f?.['firstName'].value,
        "lastName": this.f?.['lastName'].value,
        "password": this.f?.['password'].value,
        "role": this.f?.['role'].value
      }
    
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService.register(user)
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
