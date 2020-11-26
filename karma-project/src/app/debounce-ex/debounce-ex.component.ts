import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-debounce-ex",
  templateUrl: "./debounce-ex.component.html",
  styleUrls: ["./debounce-ex.component.css"],
})
export class DebounceExComponent implements OnInit {
  public searchVal: string;
  public data: string;
  private inputSubject$ = new Subject<string>();

  ngOnInit() {
    this.inputSubject$.pipe(debounceTime(1000)).subscribe((val) => {
      this.callServer(val);
    });
  }

  searchValChanged(event) {
    this.inputSubject$.next(event);
  }

  callServer(searchTerm) {
    this.data = searchTerm;
  }
}
