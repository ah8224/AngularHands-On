import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { Handson1Component } from './handson1/handson1.component';
import { Handson2Component } from './handson2/handson2.component';
import { Handson3Component } from './handson3/handson3.component';
import { Handson4Component } from './handson4/handson4.component';
import { Handson5Component } from './handson5/handson5.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'h1',component:Handson1Component},
  {path:'h2',component:Handson2Component},
  {path:'h3',component:Handson3Component},
  {path:'h3/:id',component:Handson3Component},
  {path:'h4',component:Handson4Component,canActivate : [AuthGuard]},
  {path:'h4/:id',component:Handson4Component,canActivate : [AuthGuard]},
  {path:'h5',component:Handson5Component},
  {path:'h6',component:LoginComponent},
  {path:'h7',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
