import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get("http://localhost:3000/user/" , { headers: new HttpHeaders({ 'Content-Type': 'application/json' })})
  }
  deleteUser(id:string){
   return this.http.delete(`http://localhost:3000/user/${id}` )
    
  }
  getOneUser(id:string){
    return this.http.get(`http://localhost:3000/user/${id}` , { headers: new HttpHeaders({ 'Content-Type': 'application/json' }),  withCredentials: true})
  }
  updateUser(uesrdata:object,id:string){
   return this.http.put(`http://localhost:3000/user/${id}`,uesrdata )
  
  }
}
