import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
      console.log('Form submitted successfully!', formValues);
      // Here you can add code to handle the form submission and 2FA setup
    } else {
      console.log('Please fill in all fields.');
    }
  }
}