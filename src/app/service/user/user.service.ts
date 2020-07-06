import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interface/user/user';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rooturl: string = 'https://jsonplaceholder.typicode.com/users';
  private _rootposturl:string = 'https://jsonplaceholder.typicode.com/posts';

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
    let headers = new HttpHeaders().set('Authorization','Bearer your-acces-token-here');
    return this.http.get<IUser>(`${this._rooturl}/${id}`);
   // return this.http.get<IUser>(this._rooturl,{headers:headers });
  }

  createUser(user:IUser): Observable<IUser>{
    return this.http.post<IUser>(this._rooturl,user);
  }


  updateUser(user:IUser): Observable<IUser>{
    return this.http.put<IUser>(`${this._rooturl}/${user.id}`,user);
  }

  deleteUser(id:number): Observable<IUser>{
    return this.http.delete<IUser>(`${this._rooturl}/${id}`);
  }
  getUserPosts(id:number ):Observable<any>{
    let params = new HttpParams().set('userid',id.toString())
    return this.http.get(this._rootposturl,{ params })
  }
}
