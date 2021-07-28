import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Ulist: User[] | undefined
  pst: boolean
  upt: boolean
  del: boolean
  error: boolean
  name: string | undefined;
  job: string | undefined;
  id: string | undefined;
  email: string | undefined;
  result: any;
  constructor(private uservice: UserService) {
    this.Ulist = undefined
    this.pst = false;
    this.upt = false
    this.del = false
    this.error = false
  }

  View() {
    this.pst = false;
    this.upt = false
    this.del = false
    this.error = false
    this.uservice.getAllUsers().subscribe(item => {
      this.Ulist = item.data;
      this.result = undefined;
    })
  }
  Post() {
    this.Ulist = undefined
    this.pst = true;
    this.upt = false
    this.del = false
    this.id = undefined
    this.job = undefined
    this.name = undefined
    this.result = undefined
    this.error = false
  }
  Update() {
    this.Ulist = undefined
    this.pst = false;
    this.upt = true
    this.del = false
    this.id = undefined
    this.job = undefined
    this.name = undefined
    this.result = undefined
    this.error = false
  }
  Delete() {
    this.Ulist = undefined
    this.pst = false;
    this.upt = false
    this.del = true
    this.id = undefined
    this.job = undefined
    this.name = undefined
    this.result = undefined
    this.error = false
  }
  Error() {
    this.Ulist = undefined
    this.pst = false;
    this.upt = false
    this.del = false
    this.id = undefined
    this.job = undefined
    this.name = undefined
    this.result = undefined
    this.error = true
  }
  createUser() {
    if (this.name && this.job) {
      var cont = { "name": this.name, "job": this.job }
      this.uservice.createUser(cont).subscribe(data => this.result = data.body)
      this.name = undefined
      this.job = undefined
    }
  }
  updateUser() {
    if (this.name && this.job) {
      var cont = { "name": this.name, "job": this.job }
      this.uservice.updateUser(cont).subscribe(data => this.result = data.body)
      this.name = undefined
      this.job = undefined
    }
  }
  deleteUser() {
    if (this.id) {
      this.uservice.deleteUser(this.id).subscribe(data => this.result = { "Status": data.status, "StatusText": data.statusText }
      )
      this.id = undefined
    }
  }
  registerUser() {
    if (this.email) {
      var cont = { "email": this.email }
      this.uservice.registerUser(cont).subscribe(
        (response) => {
          console.log('response received')
          this.result = response.body;
        },
        (err) => {                              
          this.result={"Error Message":err.error.error,"Status Code":err.status};
        })
    }
    this.email = undefined

  }
  ngOnInit(): void {
  }

}
