import {Component} from '@angular/core';
import {GoogleAuthService} from './google-auth.service';

@Component({
  selector: 'app-googleLogin',
  template: `
    <button class="icon" (click)="startOAuth()">Login with Google</button>
  `,
})
export class GoogleAuthButton {
  constructor(private authService: GoogleAuthService) { }

  idToken = '';

  startOAuth() {
    this.authService.oidcLogin();
  }
}
