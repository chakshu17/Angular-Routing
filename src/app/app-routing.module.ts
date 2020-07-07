import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { BlogComponent } from './component/blog/blog.component';
import { AboutComponent } from './component/about/about.component';
import { UsersComponent } from './component/users/users.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { MessgeComponent } from './component/messge/messge.component';
import { ConfirmationGuard } from './guards/confirmation/confirmation.guard';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PlaceholderComponent } from './component/placeholder/placeholder.component';
import { ParentComponent } from './component/parent/parent.component';
import { BuiltInStrDirComponent } from './component/built-in-str-dir/built-in-str-dir.component';


const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'blog', component:BlogComponent,canActivate:[ AuthGuard ] },
  { path:'about', component:AboutComponent },
  { path:'users' , component:UsersComponent,children:[
    {path:':id',component:UserdetailsComponent},
    {path:'',component:PlaceholderComponent}
  ]},
  {path:'parent', component:ParentComponent},
  {path:'str-dir', component:BuiltInStrDirComponent},
  { path:'message', component:MessgeComponent,canDeactivate:[ ConfirmationGuard]},
  {path:'**', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  providers:[AuthGuard,ConfirmationGuard],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
