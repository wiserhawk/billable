import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Credential } from '../models/billable.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint: string = 'http://localhost:8080/billable-ws/api/auth/authenticate';

  constructor(private http: HttpClient) { }

  public login(cred : Credential) : Observable<any> {
    //const body = {username: username, password: password};
    return this.http.post<any>(this.endpoint, cred);
  }
}
