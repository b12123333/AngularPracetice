import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private readonly clientId = '537821863898-scj2n8pkm88udb8e40rddsr7b74k941d.apps.googleusercontent.com';
  private readonly redirectUri = 'http://localhost:4200/functionPage';

  constructor(private http: HttpClient) { }

  public initiateOAuth() {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&redirect_uri=${this.redirectUri}&response_type=token&client_id=${this.clientId}`;
    window.location.href = authUrl;
  }

  public handleRedirect() {
    const fragment = window.location.hash.substr(1);
    const queryParams = new URLSearchParams(fragment);
    const accessToken = queryParams.get('access_token');
    if (accessToken) {
      // You can store the access token and use it to access Google APIs
      // or make requests to your backend to authenticate the user.
      console.log(accessToken);
    }
  }

  oidcLogin(): void {
    const client: google.accounts.oauth2.CodeClient = google.accounts.oauth2.initCodeClient({
      client_id: '537821863898-scj2n8pkm88udb8e40rddsr7b74k941d.apps.googleusercontent.com',
      scope: 'openid profile email',
      ux_mode: 'redirect',
      redirect_uri: 'http://localhost:4200/functionPage',
      state: '12345GG',
    });
    client.requestCode();
  }
}








