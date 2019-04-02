import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NoticeBoardComponent } from './notice-board/notice-board.component';
import { StudentsComponent } from './students/students.component';
import { StudentsService } from './students/students.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NoticeBoardComponent, StudentsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [StudentsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
