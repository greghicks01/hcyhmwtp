import { TestBed } from '@angular/core/testing';
import { SplashScreenComponent } from './splashscreen.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('SplashScreenComponent', () => {
  let component: SplashScreenComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SplashScreenComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sign-up button', () => {
    const signUpButton = fixture.debugElement.query(By.css('button[routerLink="/sign-up"]'));
    expect(signUpButton).toBeTruthy();
  });

  it('should have a sign-in button', () => {
    const signInButton = fixture.debugElement.query(By.css('button[routerLink="/sign-in"]'));
    expect(signInButton).toBeTruthy();
  });
});