import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckCibilService {

  constructor(private http:HttpClient) { }

  putChekcibil(data:any){
    return this.http.put("http://localhost:9090/cibil/checkcibil/"+data.userId,data)
  }
  getChekcibil(userId:number){
    return this.http.get("http://localhost:9090/cibil/checkcibil/"+userId)
  }
}
