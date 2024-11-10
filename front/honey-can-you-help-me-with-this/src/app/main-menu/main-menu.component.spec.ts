import { TestBed } from '@angular/core/testing';
import { MainMenuComponent } from './main-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MainMenuComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to invite others', () => {
    const inviteLink = fixture.debugElement.query(By.css('a[routerLink="/invite-others"]'));
    expect(inviteLink).toBeTruthy();
  });

  it('should have a link to create task', () => {
    const createTaskLink = fixture.debugElement.query(By.css('a[routerLink="/create-task"]'));
    expect(createTaskLink).toBeTruthy();
  });

  it('should have a link to leave instance', () => {
    const leaveInstanceLink = fixture.debugElement.query(By.css('a[routerLink="/leave-instance"]'));
    expect(leaveInstanceLink).toBeTruthy();
  });

  it('should have a link to report abuse', () => {
    const reportAbuseLink = fixture.debugElement.query(By.css('a[routerLink="/report-abuse"]'));
    expect(reportAbuseLink).toBeTruthy();
  });

  it('should have a link to close instance', () => {
    const closeInstanceLink = fixture.debugElement.query(By.css('a[routerLink="/close-instance"]'));
    expect(closeInstanceLink).toBeTruthy();
  });
});