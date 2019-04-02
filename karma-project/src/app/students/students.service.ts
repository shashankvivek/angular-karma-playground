import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _http: HttpClient) {}

  getUserList(): Observable<any> {
    return this._http.get('https://reqres.in/api/users');
  }

  getUserDetails(id) {
    return this._http.get(`https://reqres.in/api/users/${id}`);
  }
}
