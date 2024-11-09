import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { CommonModule } from '@angular/common';

describe('SignUpComponent', () => {
  let component: SignUpComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, SignUpComponent]
    }).compileComponents();

    const fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled', () => {
    component.signUpForm.controls['name'].setValue('John Doe');
    component.signUpForm.controls['email'].setValue('john.doe@example.com');
    component.signUpForm.controls['password'].setValue('password123');
    component.signUpForm.controls['twoFactorMethod'].setValue('google');
    expect(component.signUpForm.valid).toBeTrue();
  });

  it('should have an invalid form when fields are missing', () => {
    component.signUpForm.controls['name'].setValue('');
    component.signUpForm.controls['email'].setValue('');
    component.signUpForm.controls['password'].setValue('');
    component.signUpForm.controls['twoFactorMethod'].setValue('');
    expect(component.signUpForm.invalid).toBeTrue();
  });

  it('should log form values on submit when form is valid', () => {
    spyOn(console, 'log');
    component.signUpForm.controls['name'].setValue('John Doe');
    component.signUpForm.controls['email'].setValue('john.doe@example.com');
    component.signUpForm.controls['password'].setValue('password123');
    component.signUpForm.controls['twoFactorMethod'].setValue('google');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Form submitted successfully!', {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      twoFactorMethod: 'google'
    });
  });

  it('should log an error message on submit when form is invalid', () => {
    spyOn(console, 'log');
    component.signUpForm.controls['name'].setValue('');
    component.signUpForm.controls['email'].setValue('');
    component.signUpForm.controls['password'].setValue('');
    component.signUpForm.controls['twoFactorMethod'].setValue('');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Please fill in all fields.');
  });
});