import { Department } from "./department";
import { Employee } from "./employee";
import { Skills } from "./skills";

export class Emp {
    EDetail:Employee;
    DDetail:Department;
    SDetail?:Skills[];
    constructor (){
        this.EDetail={Name:"",Id:1,Permanent:false,Salary:1,DOB:new Date('12/31/2000')};
        this.DDetail={Name:"",Id:1};
    }
}