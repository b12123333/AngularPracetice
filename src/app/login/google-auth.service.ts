import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private readonly clientId = 'YOUR_CLIENT_ID';
  private readonly redirectUri = 'YOUR_REDIRECT_URI';

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
    }
  }
}








