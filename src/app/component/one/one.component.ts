import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  prop:string;
  subscription:Subscription;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.subscription= this.userService.propChange.subscribe(prop =>this.prop = prop);
  }
  changeProp(){
    this.userService.setProp('Bar');
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
