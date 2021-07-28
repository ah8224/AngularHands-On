import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  password:string="";
  errmsg:string;
  constructor(private authservice:AuthService,private _route:Router) {this.errmsg=""}
LoginForm = new FormGroup({
  'user': new FormControl(this.username, [
  Validators.required
  ]),
  'pass': new FormControl(this.password, [
    Validators.required,
  ]),
})
  ngOnInit(): void {
  }
  get f(){
    return this.LoginForm.controls;
  }
  login() {
    var user=this.f.user.value;
    var pass=this.f.pass.value;
    if (user==='admin' && pass=='password') {
      this.authservice.login()
      this.errmsg=""
      this._route.navigate(['/h5'])
    }
    else {
      this.errmsg="Invalid Username/Password"
      this.authservice.logout()
    }
    console.log(this.authservice.isLoggedIn())
  }
}
