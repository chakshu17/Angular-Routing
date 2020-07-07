import { Component, OnInit } from '@angular/core';
import { HashLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-built-in-str-dir',
  templateUrl: './built-in-str-dir.component.html',
  styleUrls: ['./built-in-str-dir.component.scss']
})
export class BuiltInStrDirComponent implements OnInit {

  messages:string[];
  showlist:boolean;
  alertType:string;

  constructor() { }

  ngOnInit(): void {
    this.messages=[
      'message 1',
      'message 2',
      'message 3',
      'message 4',
      'message 5',
    ];
    this.showlist = true;
  }

}
