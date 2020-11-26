import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DebounceExComponent } from './debounce-ex.component';

fdescribe('DebounceExComponent', () => {
  let component: DebounceExComponent;
  let fixture: ComponentFixture<DebounceExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebounceExComponent ],
      imports: [FormsModule, BrowserModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebounceExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make server request with search value', fakeAsync(() => {
    spyOn(component, 'callServer').and.callThrough();
      const searchEle = fixture.debugElement.nativeElement.querySelector(
        '#search-box'
      );
      searchEle.value = 'myval';
      searchEle.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      tick(1000);
      expect(component.callServer).toHaveBeenCalledWith('myval');
  }));
});
