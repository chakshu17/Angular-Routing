import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interface/user/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

  user: any;
  users: IUser[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=> {
     //this.user =  this.userService.getUserById(+params['id']);
      this.userService.getUserByIdREST(+params['id']).subscribe(
        user =>this.user = user
      );
    });
  }

}
