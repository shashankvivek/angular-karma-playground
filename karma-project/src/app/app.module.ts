import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { StudentsComponent } from './students/students.component';
import { StudentsService } from './students/students.service';
import { HttpClientModule } from '@angular/common/http';
import { DebounceExComponent } from './debounce-ex/debounce-ex.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NoticeBoardComponent, StudentsComponent, DebounceExComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
