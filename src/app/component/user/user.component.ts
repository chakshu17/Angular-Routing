import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interface/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: Array<{id:number,name:string, email:string}>=[
    {id:1 ,name:'Demon',email:'Demon@ag.com'},
    {id:2 ,name:'John',email:'john@ag.com'},
    {id:3 ,name:'Chakshu',email:'chakshu@ag.com'},
    {id:4 ,name:'Tanisha',email:'tanisha@ag.com'},
    {id:5 ,name:'Son Goku',email:'goku@ag.com'},
    {id:6 ,name:'Adi',email:'adi@ag.com'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
