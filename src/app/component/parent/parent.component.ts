import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { IUser } from 'src/app/interface/user/user';
import { Laptop } from 'src/app/classes/laptop';
import { HookLogger, Readonly } from 'src/app/decorators/class.decorator';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
@HookLogger({
  hookes:[
    'ngOnInit'
  ]
})

export class ParentComponent implements OnInit {

  @Readonly('this is a read only string') readonly:string;
  dateToday: Date;
  users:IUser[];
  filterIdType:string = '';
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.dateToday = new Date();
    this.users = this.userService.getusers();
    let laptop: Laptop = new Laptop;
    //console.log(laptop['stickers']);
     console.log(this.readonly);
     this.readonly = 'This was changed';
     console.log(this.readonly);
  }
  addUser(){
    this.userService.addUser({
      id: this.users.length + 2,
      name: 'Jacob',
      email:'jacod@gmail.com'
    });
  }

}
