import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _http: HttpClient) {}

  getUserList(): Observable<any> {
    return this._http.get('https://reqres.in/api/users');
  }

  getUserDetails(id) {
    return this._http.get(`https://reqres.in/api/users/${id}`).pipe(map((data) => this.transformResponseToAddCountry(data)));
  }

  // this method transforms the response and adds "university" property to the json
  transformResponseToAddUniversity(response) {
    response['data']['university'] = 'MIT';
    return response;
  }

  // JUST FOR TESTING PURPOSE, NOT USED ANYWHERE IN PROJECT
  getDepartmentMapping(deptId, studentId) {
    let param = new HttpParams();
    param = param.append('deptId', deptId);
    param = param.append('userId', studentId);
    return this._http.get(`https://someUrl.com/association/`, {
      params: param,
    });
  }

  // JUST FOR TESTING PURPOSE, NOT USED ANYWHERE IN PROJECT
  saveUserAssociation(deptId, studentId) {
    return this._http.post(`https://someUrl.com/association/`, {
      deptId: deptId,
      studentId: studentId,
    });
  }
}
