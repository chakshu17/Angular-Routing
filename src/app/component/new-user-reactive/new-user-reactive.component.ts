import { Component, OnInit } from '@angular/core';
import { FormGroup,FormArray,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.scss']
})
export class NewUserReactiveComponent implements OnInit {

  userForm:FormGroup
  get name(){
    return this.userForm.get('name');
  }

  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('Chakshu Kishnani', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('Chakshu Kishnani')
      ]),
      username: new FormControl('chakshu'),
      email: new FormControl('chakshu@gmail.com'),
      phone: new FormControl('1236547890'),
      website: new FormControl('ck.com'),

      address: new FormControl({
        street: new FormControl('123 HT st'),
        suite: new FormControl('suite 1400'),
        city: new FormControl('lv'),
        zipcode: new FormControl('201305'),

        geo: new FormControl({
          lat: new FormControl('120.164'),
          lng: new FormControl('38.18'),
        })
      }),

      company: new FormGroup({
        name: new FormControl('Kaizers Inc'),
        catchPhase: new FormControl('hahaha'),
        bs: new FormControl('A company for everything.'),
      }),
      hobbies: new FormArray([])
    });
  }

  addhobby(){
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''));
  }
  submit(){

  }
}
