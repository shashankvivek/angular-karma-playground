import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StudentsService } from './students.service';

const dummyUserListResponse = {
  data: [
    { id: 1, first_name: 'George', last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
    { id: 2, first_name: 'Janet', last_name: 'Weaver', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg' },
    { id: 3, first_name: 'Emma', last_name: 'Wong', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg' },
  ],
};

const dummyUserDetails = {
  data: { id: 1, first_name: 'George', last_name: 'Bluth', avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg' },
};

const tranformedDummyUserDetails = {
  data: {
    id: 1,
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
    university: 'MIT',
  },
};

describe('StudentsService', () => {
  let injector: TestBed;
  let service: StudentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentsService],
    });

    injector = getTestBed();
    service = injector.get(StudentsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('getUserList() should return data', () => {
    service.getUserList().subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse);
    });

    const req = httpMock.expectOne('https://reqres.in/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });

  it('getUserDetails() should return trasnformed data', () => {
    service.getUserDetails('1').subscribe((res) => {
      expect(res).toEqual(dummyUserListResponse);
    });

    const req = httpMock.expectOne('https://reqres.in/api/users/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUserListResponse);
  });

  it('getDepartmentMapping() should return data', () => {
    service.getDepartmentMapping('dept-1', 'usr-1').subscribe((res) => {
      expect(res).toEqual({ id: 'usr-1' });
    });

    const reqMock = httpMock.expectOne((req) => req.method === 'GET' && req.url === 'https://someUrl.com/association/');
    expect(reqMock.request.method).toBe('GET');
    reqMock.flush({ id: 'usr-1' });
  });

  it('saveUserAssociation() should POST and return data', () => {
    service.saveUserAssociation('dept-1', 'usr-1').subscribe((res) => {
      expect(res).toEqual({ msg: 'success' });
    });

    const req = httpMock.expectOne('https://someUrl.com/association/');
    expect(req.request.method).toBe('POST');
    req.flush({ msg: 'success' });
  });
});
