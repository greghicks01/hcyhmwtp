import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
  signIn(userData: any) {
    console.log('Mock sign-in API called with:', userData);
    // Simulate a response that requires 2FA
    return of({ requires2FA: true }).pipe(delay(1000));
  }

  verify2FA(userData: any) {
    console.log('Mock 2FA verification API called with:', userData);
    // Simulate a successful 2FA verification response and setting a JWT token
    document.cookie = "sessionToken=mock-jwt-token; path=/";
    return of({ success: true }).pipe(delay(1000));
  }

  isLoggedIn() {
    // Check if the session cookie is set
    return document.cookie.includes("sessionToken=mock-jwt-token");
  }
}