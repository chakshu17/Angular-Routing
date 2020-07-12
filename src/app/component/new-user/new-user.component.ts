import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];

  constructor() { }

  ngOnInit(): void {
    this.genders = ['Male','Female','Others'];
    this.communicationModes= ['Phone','Email'];
  }
  submit(userform){
    console.log('Form submitted.',userform);
  }
}
