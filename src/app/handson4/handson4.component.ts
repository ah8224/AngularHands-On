import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Emp } from '../handson2/Models/emp';

@Component({
  selector: 'app-handson4',
  templateUrl: './handson4.component.html',
  styleUrls: ['./handson4.component.css']
})
export class Handson4Component implements OnInit {
  // EList: Emp[] = [
  //   { 
  //     EDetail: {Name: "John", Id: 1, Permanent: false, Salary: 5000,DOB:new Date('2/1/2002') },
  //     DDetail: {Id: 1, Name: "Payroll"},
  //     SDetail:[{Id:1,Name:"Java"},{Id:2,Name:"Kotlin"}]
  //   },
  //   { 
  //     EDetail: { Name: "Smith", Id: 2, Permanent: true, Salary: 10000,DOB:new Date('6/8/2000')}, 
  //     DDetail: { Id: 2, Name: "Internal" },
  //     SDetail:[{Id:4,Name:"R"},{Id:5,Name:"Python"}]
  //   },
  //   {
  //     EDetail: { Name: "Andrew", Id: 3, Permanent: true, Salary: 5450,DOB:new Date('5/3/2003') }, 
  //     DDetail: { Id: 3, Name: "HR" },
  //     SDetail:[{Id:3,Name:"JavaScript"},{Id:6,Name:"Angular"}]
  //   },
  // ]
  employee: Emp = new Emp;
  did:number|undefined;
  departments = [
    { Id: 1, Name: "Payroll" }, 
    { Id: 2, Name: "Internal" },  
    { Id: 3, Name: "HR" }
    ]
  
  constructor(private route : ActivatedRoute, private eService : EmployeeService) { }

  ngOnInit(): void {
    var x=this.route.snapshot.paramMap.get('id');
    if (x)
    {this.employee=this.eService.getEmployee(+x)}
  }
  setDP($event:any) {
    this.did=(+$event.target.value);
  }
  Save() {
    this.employee.EDetail.Name=(this.empForm.get('name')?.value);
    this.employee.EDetail.Salary=(this.empForm.get('salary')?.value);
    if (this.did)
    this.employee.DDetail.Id=this.did;
    this.employee.DDetail.Name=this.departments.filter(i=>i.Id===this.employee.DDetail.Id)[0].Name;
    this.employee.EDetail.Permanent=(this.empForm.get('permanent')?.value);
    console.log(this.employee.DDetail.Name)
    console.log(this.employee.EDetail.Permanent)
    console.log(this.employee.EDetail.Salary)
    console.log(this.employee.EDetail.Name)
  }
  empForm = new FormGroup({
    'name': new FormControl(this.employee.EDetail.Name, [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(10)
    ]),
    'salary': new FormControl(this.employee.EDetail.Salary, [
      Validators.required,
    ]),
    'permanent': new FormControl(this.employee.EDetail.Permanent,[
      Validators.required,
    ]),
    'did': new FormControl(this.employee.DDetail.Id,[
      Validators.required,
    ])
  })
  get f(){
    return this.empForm.controls;
  }
}
