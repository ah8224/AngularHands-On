import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handson1',
  templateUrl: './handson1.component.html',
  styleUrls: ['./handson1.component.css']
})
export class Handson1Component implements OnInit {
  res1:string;
  res2:number;
  res3:number;
  prop1:boolean;
  constructor() {
    this.res1="";
    this.res2=0;
    this.res3=0;
    this.prop1=true;
 }

  ngOnInit(): void {
  }
  fn1() {this.res1="Button Clicked !"}
  fn2() {this.res2++;}
  fn3() {
    if (this.res3==1) {this.prop1=true;}
    this.res3--;
  }
  fn4() {
    this.res3++;
    if (this.res3>0) {this.prop1=false;}
  }
}
