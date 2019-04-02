import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.css'],
})
export class NoticeBoardComponent implements OnInit {
  public title = 'NOTICE BOARD';
  public disableNoButton = true;
  public userResponse: string;
  constructor() {}

  ngOnInit() {}

  public sayYes() {
    this.userResponse = 'I am In';
  }
}
