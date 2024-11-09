import { Routes } from '@angular/router';
import { AcknowledgeChangeComponent } from './acknowledge-change/acknowledge-change.component';
import { BuyProComponent } from './buy-pro/buy-pro.component';
import { CloseInstanceComponent } from './close-instance/close-instance.component';
import { CreateStepComponent } from './create-step/create-step.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { InviteOthersComponent } from './invite-others/invite-others.component';
import { LeaveInstanceComponent } from './leave-instance/leave-instance.component';
import { ReportAbuseComponent } from './report-abuse/report-abuse.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SplashScreenComponent } from './splashscreen/splashscreen.component';


export const routes: Routes = [
  { path: 'acknowledge-change', component: AcknowledgeChangeComponent },
  { path: 'buy-pro', component: BuyProComponent },
  { path: 'close-instance', component: CloseInstanceComponent},
  { path: 'create-step', component: CreateStepComponent },
  { path: 'create-task', component: CreateTaskComponent },
  { path: 'invite-others', component: InviteOthersComponent},
  { path: 'leave-instance', component: LeaveInstanceComponent },
  { path: 'report-abuse', component: ReportAbuseComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: SplashScreenComponent }
];
