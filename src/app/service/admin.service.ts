import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  
  getAdmin(username:any,password:any){
    return this.http.get("http://localhost:9090/admin/getadmin/"+username+"/"+password)
  }
  postAdmin(data:any){
    return this.http.post("http://localhost:9090/admin/postadmin",data)

  }
}
