import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/interface/user/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // this.users= this.userService.getusers();
    this.userService
      .getUsersViaREST()
      .subscribe((users) => this.users = users);
  }
}
