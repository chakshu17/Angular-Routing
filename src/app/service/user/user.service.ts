import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interface/user/user';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from "@angular/fire/database";
// import  'rxjs/add/operator/map';
// import  'rxjs/add/operator/retry';
// import  'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _rooturl: string = 'https://jsonplaceholder.typicode.com/users';
  private _rootposturl:string = 'https://jsonplaceholder.typicode.com/posts';
  private _prop: string ='foo' ;
  private userlist:AngularFireList<any>;

  public propChange:BehaviorSubject<string> = new BehaviorSubject<string>(this._prop);
  private _users: IUser[]=[
    {id:1 ,name:'Demon',email:'Demon@ag.com'},
    {id:2 ,name:'John',email:'john@ag.com'},
    {id:3 ,name:'Chakshu',email:'chakshu@ag.com'},
    {id:4 ,name:'Tanisha',email:'tanisha@ag.com'},
    {id:5 ,name:'Son Goku',email:'goku@ag.com'},
    {id:6 ,name:'Adi',email:'adi@ag.com'},
  ]
  constructor(
    private http:HttpClient,
    private firebase:AngularFireDatabase
    ) {
      this.userlist= this.firebase.list('users');
    }

  getProp():string{
    return this._prop;
  }

  addUser(user:IUser){
    this._users.push(user);
  }

  setProp(prop:string):void{
    this._prop = prop;
    this.propChange.next(this._prop);
  }

  getusers(): IUser[]{
    return this._users;
  }
  getUsersViaREST(): Observable<IUser[]> {
    let headers = new HttpHeaders().set('Authorization','Bearer your-acces-token-here');
     return this.http.get<IUser[]>(this._rooturl);
    // return this.http
    //   .get<IUser[]>(this._rooturl, { headers })
    //   .map((users) => {
    //     return users.map((user) => {
    //       return {
    //         id: user.id,
    //         name: user.name,
    //         email: user.email
    //       }
    //     })
    //   });
  }
  getUserById(id:number):IUser{
    return this._users.filter(user => user.id === id)[0];
  }

  getUserByIdREST(id:number):Observable<IUser>{
   return this.http.get<IUser>(`${this._rooturl}/${id}`);
  //  return this.http.get<IUser>(`${this._rooturl}/${id}sdfgds`)
  //   .retry(3)
  //   .catch( err=>{
  //     console.log('got error as :',err);
  //     return err;
  //   });
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

  getUsersFromFirebase(){
    return this.userlist;
  }
  addUsersToFirebase(user: IUser){
    this.userlist.push(user);
  }
  updateUserFirebase(user: IUser){
    let $key = user.$key;//add $key in interface thge use this in service.
    delete user.$key;
    this.userlist.update($key,user);
  }
  deleteUserFromFirebase($key:string){
    this.userlist.remove($key);
  }
}
