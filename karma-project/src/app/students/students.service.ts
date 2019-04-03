import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getDepartmentMapping(deptId, studentId) {
    let param = new HttpParams();
    param = param.append('deptId', deptId);
    param = param.append('userId', studentId);
    return this._http.get(`https://someUrl.com/association/`, {
      params: param,
    });
  }
}
