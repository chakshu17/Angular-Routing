import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  prop:string;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.propChange.subscribe(prop =>this.prop = prop);
  }

}
