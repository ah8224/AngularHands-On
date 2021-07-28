import { Pipe, PipeTransform } from "@angular/core"
import { Emp } from "../handson2/Models/emp";
@Pipe({name: 'searchPipe'})
export class searchPipe implements PipeTransform {
   
    transform(Elist:Emp[],value:string) {
        var x=value.trim().toLowerCase()
        // console.log(value)
        if (!Elist || !value)
            return Elist
        return Elist.filter((item)=>{
            if (item.EDetail.Name.toLowerCase().includes(x)) return item;
            return null;
        })
    }

}