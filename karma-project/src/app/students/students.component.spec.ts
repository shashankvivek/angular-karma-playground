import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsComponent } from './students.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsService } from './students.service';
import { StudentsServiceStub } from './students.service.mock';

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

  it('should have "user_list" populated ', () => {
    expect(component.user_list.length).toBe(3);
  });
});
