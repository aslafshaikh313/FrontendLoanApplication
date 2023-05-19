import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquiryServiceService {

  constructor(private http:HttpClient) { }

  postEnquiry(data:any)
  {
    return this.http.post("http://localhost:9090/enquiry/postenquiry",data);
  }
  getEnquiry()
  {
    return this.http.get("http://localhost:9090/enquiry/getenquiry");
  }
  getByIdEnquiry(data)
  {
    return this.http.get("http://localhost:9090/enquiry/getenquiry/"+data.userId);
  }

  deleteByIdEnquiry(data)
  {
    return this.http.get("http://localhost:9090/enquiry/deleteenquiry/"+data.userId);
  }
}
