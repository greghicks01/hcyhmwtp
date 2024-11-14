import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MockAuthService } from './mocks/mock-auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm: FormGroup;
  isWaitingFor2FA: boolean = false;

  constructor(private fb: FormBuilder, private authService: MockAuthService, private router: Router) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      twoFactorCode: ['']
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const formValues = this.signInForm.value;
      this.authService.signIn(formValues).subscribe(response => {
        console.log('Form submitted successfully!', formValues);
        if (response.requires2FA) {
          this.isWaitingFor2FA = true;
        } else {
          this.router.navigate(['/main-menu']);
        }
      });
    } else {
      console.log('Please fill in all fields.');
    }
  }

  onVerify2FA() {
    const formValues = this.signInForm.value;
    this.authService.verify2FA(formValues).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/main-menu']);
      } else {
        console.log('Invalid 2FA code.');
      }
    });
  }
}