import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Emp } from '../handson2/Models/emp';

@Component({
  selector: 'app-handson3',
  templateUrl: './handson3.component.html',
  styleUrls: ['./handson3.component.css']
})
export class Handson3Component implements OnInit {
  employee: Emp =new Emp();
  departments = [
    { Id: 1, Name: "Payroll" }, 
    { Id: 2, Name: "Internal" },  
    { Id: 3, Name: "HR" }
    ]
  constructor(private route: ActivatedRoute,private eservice:EmployeeService) {
   }

  ngOnInit(): void {
    var x=this.route.snapshot.paramMap.get('id');
    if (x)
    this.employee=this.eservice.getEmployee(+x)
  }
  
  setDP($event:any) {
    this.employee.DDetail.Id=(+$event.target.value);
    this.employee.DDetail.Name=this.departments.filter(x=>x.Id==this.employee.DDetail.Id)[0].Name;
  }
  Save() {
    console.log(this.employee.DDetail.Name)
    console.log(this.employee.EDetail.Permanent)
    console.log(this.employee.EDetail.Salary)
    console.log(this.employee.EDetail.Name)
  }
}
