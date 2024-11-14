import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
import { CommonModule } from '@angular/common';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, SignInComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form when all fields are filled', () => {
    component.signInForm.controls['email'].setValue('john.doe@example.com');
    component.signInForm.controls['password'].setValue('password123');
    component.signInForm.controls['twoFactorCode'].setValue('123456');
    expect(component.signInForm.valid).toBeTrue();
  });

  it('should have an invalid form when fields are missing', () => {
    component.signInForm.controls['email'].setValue('');
    component.signInForm.controls['password'].setValue('');
    expect(component.signInForm.invalid).toBeTrue();
  });

  it('should log form values on submit when form is valid', () => {
    spyOn(console, 'log');
    component.signInForm.controls['email'].setValue('john.doe@example.com');
    component.signInForm.controls['password'].setValue('password123');
    component.signInForm.controls['twoFactorCode'].setValue('123456');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Mock sign-in API called with:', {
      email: 'john.doe@example.com',
      password: 'password123',
      twoFactorCode:  '123456'
    });
  });

  it('should log an error message on submit when form is invalid', () => {
    spyOn(console, 'log');
    component.signInForm.controls['email'].setValue('');
    component.signInForm.controls['password'].setValue('');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Please fill in all fields.');
  });
});