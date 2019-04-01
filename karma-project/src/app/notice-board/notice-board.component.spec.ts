import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeBoardComponent } from './notice-board.component';
import { By } from '@angular/platform-browser';

fdescribe('NoticeBoardComponent', () => {
  let component: NoticeBoardComponent;
  let fixture: ComponentFixture<NoticeBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeBoardComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('NOTICE BOARD');
    // we are accessing "h1"
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('NOTICE BOARD');
  });

  it('should have "No" button disabled by default', () => {
    expect(component.disableNoButton).toBeTruthy();
  });
});
