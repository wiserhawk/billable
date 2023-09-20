import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/billable.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/billable-ws/';

  constructor(private http: HttpClient) { }

  public saveUser(user: User): Observable<boolean> {
    const endpoint =  this.url + 'api/users';
    return this.http.post<any>(endpoint, user);
  }
}
