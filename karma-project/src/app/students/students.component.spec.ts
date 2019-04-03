import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './students.service';
import { StudentsServiceStub } from './students.service.mock';
import { By } from '@angular/platform-browser';

describe('StudentsComponent', () => {
  let component: StudentsComponent;
  let fixture: ComponentFixture<StudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
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
  });
});
