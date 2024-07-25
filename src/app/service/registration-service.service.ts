import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegistrationServiceService {

  constructor(private http: HttpClient) { }

  postRegister(data: FormGroup) {
    return this.http.post("http://localhost:9090/registration/postregistration", data.value);
  }


  putRegister(data: FormData) {
    alert("in service")
    return this.http.put("http://localhost:9090/registration/putregistration", data);
  }


  getRegister() {
    return this.http.get("http://localhost:9090/registration/getregistration");
  }
  getByIdRegister(data) {
    return this.http.get("http://localhost:9090/registration/getregistration" + data.userId);
  }

  deleteByIdRegister(data) {
    return this.http.get("http://localhost:9090/registration/deleteregistration/" + data.userId);
  }


  updateDocumentStatus(userId: any, varifiedDoc: any) {
    return this.http.put("http://localhost:9090/registration/updateLoanStatus/" + userId, varifiedDoc)
  }




  gererateSanctionLetter(data: any, saction: any) {
    console.log(saction);
    return this.http.put("http://localhost:9090/sanctionletter/putsanctionletterpdf/" + data, saction);
  }

  searchSanctionLetter(data: any) {
    return this.http.get("http://localhost:9090/registration/getregistration/" + data);
  }





  putLoandisbus(formvalue: FormGroup, data: any) {
    alert("in service")
    return this.http.put("http://localhost:9090/loandisburse/updateloandisburse/" + data.userId, formvalue.value);
  }

  addLedger(userId: any, e: any) {
    alert("service ledger")
    return this.http.put("http://localhost:9090/ledger/updateledger/" + userId, e)
  }

  
  addDefaulter(userId: any, e: any) {
    alert("service ledger")
    return this.http.put("http://localhost:9090/defaulter/updatedefaulter/" + userId, e)
  }



  
  getPaidUnpaidData(ledgerDefaulter:any) {
    return this.http.get("http://localhost:9090/registration/getpaidUnpaidregistration/"+ledgerDefaulter);
  }


  getsearch(userId:any){
    return this.http.get("http://localhost:9090/registration/gettenure/"+userId);
  }
}
