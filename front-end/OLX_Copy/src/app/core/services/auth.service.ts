import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  LogIn(userData:object){
    return this.http.post("http://localhost:3000/user/login", userData,{ headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response', withCredentials: true})
  }
  register(userData:object){
    return this.http.post("http://localhost:3000/user/register", userData , { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), observe: 'response', withCredentials: true})

  }
}
