import { Component, OnInit } from '@angular/core';
import { Emp } from '../handson2/Models/emp';

@Component({
  selector: 'app-handson5',
  templateUrl: './handson5.component.html',
  styleUrls: ['./handson5.component.css']
})

export class Handson5Component implements OnInit {
  EList: Emp[] = [
    { 
      EDetail: {Name: "John", Id: 1, Permanent: false, Salary: 5000,DOB:new Date('2/1/2002') },
      DDetail: {Id: 1, Name: "Payroll"},
      SDetail:[{Id:1,Name:"Java"},{Id:2,Name:"Kotlin"}]
    },
    { 
      EDetail: { Name: "Smith", Id: 2, Permanent: true, Salary: 10000,DOB:new Date('6/8/2000')}, 
      DDetail: { Id: 2, Name: "Internal" },
      SDetail:[{Id:4,Name:"R"},{Id:5,Name:"Python"}]
    },
    {
      EDetail: { Name: "Andrew", Id: 3, Permanent: true, Salary: 5450,DOB:new Date('5/3/2003') }, 
      DDetail: { Id: 3, Name: "HR" },
      SDetail:[{Id:3,Name:"JavaScript"},{Id:6,Name:"Angular"}]
    },
  ]
  term:string;
  constructor() {this.term=""}
  ngOnInit(): void {
  }
  
}
