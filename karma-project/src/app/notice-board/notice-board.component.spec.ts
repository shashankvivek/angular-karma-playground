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

  it('should have a title in header h1', () => {
    expect(component.title).toBe('NOTICE BOARD');
    const title = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(title.innerHTML).toBe('NOTICE BOARD');
  });

  it('should have content in notice board ', () => {
    const board = fixture.debugElement.query(By.css('.board')).nativeElement;
    expect(board.innerHTML).not.toBeNull();
    // console.log(board.innerHTML)
    expect(board.innerHTML.length).toBeGreaterThan(0);
  });

  it('should have Yes in "Yes Button"', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    expect(btn.innerHTML).toBe('Yes');
  });

  it('should set userResponse when Yes button is clicked', () => {
    expect(component.userResponse).toBeUndefined();
    const btn = fixture.debugElement.nativeElement.querySelector('#yes-btn');
    btn.click();
    expect(component.userResponse).toBe('I am In');
  });

  it('should have No button disabled', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#no-btn');
    expect(btn.disabled).toBeTruthy();
  });

  it('should have "No" button disabled by default', () => {
    expect(component.disableNoButton).toBeTruthy();
  });
});
