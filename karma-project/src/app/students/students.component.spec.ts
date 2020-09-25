import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './students.service';
import { StudentsServiceStub } from './students.service.mock';
import { By } from '@angular/platform-browser';
import { throwError } from 'rxjs';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [StudentsComponent],
      providers: [{ provide: StudentsService, useClass: StudentsServiceStub }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "user_list" populated ', () => {
    expect(component.user_list.length).toBeGreaterThan(0);
  });

  it('should call getUserList() of StudentService on component Init', () => {
    spyOn(component._userService, 'getUserList').and.callThrough();
    component.ngOnInit();
    expect(component._userService.getUserList).toHaveBeenCalled();
  });

  it('should render User List in HTML', () => {
    const ele = fixture.debugElement.query(By.css('.users-div')).nativeElement;
    // console.log(ele.childNodes[1].innerHTML)
    expect(ele.childNodes[1].innerHTML).not.toBeNull();
    expect(ele.childNodes[2].innerHTML).not.toBeNull();
    expect(ele.childNodes[3].innerHTML).not.toBeNull();
  });

  describe('should have User Board', () => {
    it('empty by default', () => {
      const ele = fixture.debugElement.nativeElement.querySelector('#board');
      expect(ele.innerHTML.trim()).toBe('paid : 0');
    });
    it('populated when a user name is clicked ', () => {
      const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
      ele.click();
      fixture.detectChanges(); // added to detect changes in HTML. Comment this try.
      const board_ele = fixture.debugElement.nativeElement.querySelector('#board');
      expect(board_ele.innerHTML.trim()).toBe('George Bluth paid : 1000');
      expect(component.selected_user.first_name).toBe('George');
    });
  });

  it('should call getDetails() with proper id when a value is selected from HTML', () => {
    spyOn(component, 'getDetails').and.callThrough();
    const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
    ele.click();
    expect(component.getDetails).toHaveBeenCalledWith(1);
  });

  it('should set Error message when getUserDetails() is errored out', () => {
    expect(component.err_msg).toBeUndefined();
    spyOn(component._userService, 'getUserDetails').and.returnValue(throwError('Error'));
    const ele = fixture.debugElement.nativeElement.querySelector('#usr-1');
    ele.click();
    expect(component.err_msg).toBe('Error while loading User Details');
  });
});
