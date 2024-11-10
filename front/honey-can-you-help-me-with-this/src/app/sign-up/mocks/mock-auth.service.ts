import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
  signUp(userData: any) {
    console.log('Mock sign-up API called with:', userData);
    // Simulate a successful API response with a delay
    return of({ success: true, message: 'User signed up successfully!' }).pipe(delay(1000));
  }
}