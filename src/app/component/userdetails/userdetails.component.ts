import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interface/user/user';
import { UserService } from 'src/app/service/user/user.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss'],
})
export class UserdetailsComponent implements OnInit {
  user: any;
  users: IUser[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((params)=> {
    this.user =  this.userService.getUserById(+params['id']);
     this.userService.getUserByIdREST(+params['id']).subscribe(
       user =>this.user = user
     );
   });
  }

  createUser(){
    this.user.id = null;
    this.userService.createUser(this.user).subscribe(
      user => alert(`A new user was crated with id: ${user.id}` ),
      err=>alert(`got error as ${err}`),
      () => alert(`Creation completed`),
    );
  }
  deleteUser(){

  }
  updateUser(){
    this.user.name = "Demon king";
    this.user.email = "demon@agg.com";
    this.userService.updateUser(this.user).subscribe(
      user => alert(`The user was Updated` ),
      err=>alert(`got error as ${err}`),
      () => alert(`Updation completed`),
    );
  }
  getUserPosts(){

  }
}
