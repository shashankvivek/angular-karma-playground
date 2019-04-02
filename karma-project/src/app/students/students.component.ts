import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  user_list = [];
  err_msg: string;
  selected_user = {
    first_name: '',
    last_name: '',
  };
  constructor(public _userService: StudentsService) {}

  ngOnInit() {
    this._userService.getUserList().subscribe(
      (res) => {
        this.user_list = res.data;
      },
      (err) => {
        this.err_msg = 'Error while loading User List';
      }
    );
  }

  getDetails(id) {
    this._userService.getUserDetails(id).subscribe((res) => {
      this.selected_user = res['data'];
    },
    (err) => {
      this.err_msg = 'Error while loading User Details';
    });
  }
}
