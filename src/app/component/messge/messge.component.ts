import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../../guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-messge',
  templateUrl: './messge.component.html',
  styleUrls: ['./messge.component.scss']
})
export class MessgeComponent implements CanComponentDeactivate {

  data:string;
  list: Array<string>= [];

  input(){
    this.list.push(this.data);
    this.data='';
  }
  confirm(){
    return confirm('you want to change page? ');
  }
}
