import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interface/user/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rooturl: string = 'https://jsonplaceholder.typicode.com/users';

  private _users: IUser[]=[
    {id:1 ,name:'Demon',email:'Demon@ag.com'},
    {id:2 ,name:'John',email:'john@ag.com'},
    {id:3 ,name:'Chakshu',email:'chakshu@ag.com'},
    {id:4 ,name:'Tanisha',email:'tanisha@ag.com'},
    {id:5 ,name:'Son Goku',email:'goku@ag.com'},
    {id:6 ,name:'Adi',email:'adi@ag.com'},
  ]
  constructor(private http:HttpClient) { }

  getusers(): IUser[]{
    return this._users;
  }
  getUsersViaREST(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._rooturl);
  }
  getUserById(id:number):IUser{
    return this._users.filter(user => user.id === id)[0];
  }

  getUserByIdREST(id:number):Observable<IUser>{
    return this.http.get<IUser>(`${this._rooturl}/${id}`);
  }
}
