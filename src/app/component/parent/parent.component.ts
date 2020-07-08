import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  dateToday: Date;

  constructor() { }

  ngOnInit(): void {
    this.dateToday = new Date();
  }

}
