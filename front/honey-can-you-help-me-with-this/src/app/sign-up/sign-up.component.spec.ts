import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { MockAuthService } from './mocks/mock-auth.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let mockAuthService: MockAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, SignUpComponent],
      providers: [MockAuthService]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    mockAuthService = TestBed.inject(MockAuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should log form values on submit when form is valid', () => {
    spyOn(console, 'log');
    const formValues = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      twoFactorMethod: 'google'
    };
    component.signUpForm.controls['name'].setValue(formValues.name);
    component.signUpForm.controls['email'].setValue(formValues.email);
    component.signUpForm.controls['password'].setValue(formValues.password);
    component.signUpForm.controls['twoFactorMethod'].setValue(formValues.twoFactorMethod);

    spyOn(mockAuthService, 'signUp').and.returnValue(of({ success: true, message: 'User signed up successfully!' }));

    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Form submitted successfully!', formValues);
  });
});