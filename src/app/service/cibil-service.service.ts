import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CibilServiceService {

  constructor(private http:HttpClient) { }

    cibilCheckAPI(data:any)
    {
      return this.http.put("http://localhost:9090/cibil/checkcibil/"+data.userId,data);
    }
}
