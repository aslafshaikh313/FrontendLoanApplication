import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }


  sendMail(data: any) {
    return this.http.post("http://localhost:9090/email/postemail", data)
  }

  sendMailForSanctionLetter(data: any){
    return this.http.get("http://localhost:9090/email/sendSantionLetterMail/"+data.userId,data)
  }

  sendMailForDocVerified(data: any){
    return this.http.post("http://localhost:9090/email/postemaildocument",data)

  }
}
