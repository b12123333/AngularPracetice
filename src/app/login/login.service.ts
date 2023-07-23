import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginInfo(model : any) : Observable<any>{

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(model)

    return this.http.get<any>(`http://localhost:8080/b12123333`);
  }
}
