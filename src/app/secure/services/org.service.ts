import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../models/billable.model';

@Injectable({
  providedIn: 'root'
})
export class OrgService {

  constructor(private http: HttpClient) { }

  public saveOrg(org: Organization): Observable<boolean> {
    const endpoint = 'http://localhost:8080/billable-ws/api/org/new';
    return this.http.post<any>(endpoint, org);
  }

}
 