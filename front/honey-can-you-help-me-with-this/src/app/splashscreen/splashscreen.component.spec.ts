import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SplashscreenComponent } from './splashscreen.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SplashscreenComponent', () => {
  let component: SplashscreenComponent;
  let fixture: ComponentFixture<SplashscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SplashscreenComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a sign-in button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[routerLink="/sign-in"]')).toBeTruthy();
  });

  it('should have a sign-up button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[routerLink="/sign-up"]')).toBeTruthy();
  });
});