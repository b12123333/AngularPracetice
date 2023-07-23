import { Component } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';

@Component({
  selector: 'app-googleLogin',
  template: `
    <button (click)="startOAuth()">Login with Google</button>
  `,
})
export class GoogleAuthButton {
  constructor(private authService: GoogleAuthService) { }

  startOAuth() {
    this.authService.initiateOAuth();
  }

  ngOnInit() {
    this.authService.handleRedirect();
  }
}
