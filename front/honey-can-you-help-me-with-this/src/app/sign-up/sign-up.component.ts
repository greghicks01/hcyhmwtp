import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MockAuthService } from './mocks/mock-auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  isWaitingForConfirmation: boolean = false;

  constructor(private fb: FormBuilder, private authService: MockAuthService, private router: Router) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      twoFactorMethod: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formValues = this.signUpForm.value;
      this.authService.signUp(formValues).subscribe(response => {
        console.log('Form submitted successfully!', formValues);
        console.log(response.message);
        this.isWaitingForConfirmation = true;
      });
      // Here you can add code to handle the form submission and 2FA setup
    } else {
      console.log('Please fill in all fields.');
    }
  }

  onConfirmEmail() {
    console.log('Email confirmed!');
    this.router.navigate(['/main-menu']);
  }
}