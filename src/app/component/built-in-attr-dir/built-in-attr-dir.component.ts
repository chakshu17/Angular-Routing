import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-attr-dir',
  templateUrl: './built-in-attr-dir.component.html',
  styleUrls: ['./built-in-attr-dir.component.scss']
})
export class BuiltInAttrDirComponent implements OnInit {

  gradientToggle: boolean;

  constructor() { }

  ngOnInit(): void {
    this.gradientToggle = true;
  }

}
