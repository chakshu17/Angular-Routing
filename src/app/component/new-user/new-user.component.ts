import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { IUser } from 'src/app/interface/user/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  communicationModes: string[];
  genders: string[];
  userlist:IUser[];

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.genders = ['Male','Female','Others'];
    this.communicationModes= ['Phone','Email'];
  }
  submit(userform){
    console.log('Form submitted.',userform);
    this.userService.addUsersToFirebase(userform.value);
  }
  getUsers(){
    this.userService.getUsersFromFirebase().snapshotChanges().forEach(usersSnapshot =>{
      this.userlist = [];
      usersSnapshot.forEach(userSnapshot =>{
         let user = userSnapshot.payload.toJSON();
         user['$key'] = userSnapshot.key;
         this.userlist.push(user as IUser);
       });
    });
  }
  updateUser(userform: NgForm){
    this.userlist[1].name = userform.value.name;
    this.userService.updateUserFirebase(this.userlist[1])
  }
  deleteUser(){
    this.userService.deleteUserFromFirebase(this.userlist[1].$key);
  }
}
