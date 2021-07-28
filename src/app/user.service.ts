import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  endpoint:string = 'https://reqres.in/api/users/';
  
  getAllUsers(): Observable<any> {
    return this.http.get<User>(this.endpoint).pipe();
  }
  createUser(content:{}): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(content);
    return this.http.post(this.endpoint, body,{'headers':headers , observe: 'response'})
  }
  updateUser(content:{}): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(content);
    return this.http.put(this.endpoint, body,{'headers':headers , observe: 'response'})
  }
  deleteUser(content:string): Observable<any> {
    return this.http.delete(this.endpoint+content,{observe: 'response'})
  }
  registerUser(content:{}): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(content);
    return this.http.post("https://reqres.in/api/register", body,{'headers':headers , observe: 'response'})
  }
  }

