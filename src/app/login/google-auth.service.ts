import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuthService {
  private readonly clientId = '537821863898-scj2n8pkm88udb8e40rddsr7b74k941d.apps.googleusercontent.com';
  private readonly redirectUri = 'http://localhost:4200/functionPage';

  constructor(private http: HttpClient) { }

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








