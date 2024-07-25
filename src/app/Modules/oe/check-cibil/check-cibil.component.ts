import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckCibilService } from 'src/app/service/check-cibil.service';
import { EnquiryServiceService } from 'src/app/service/enquiry-service.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrls: ['./check-cibil.component.css']
})
export class CheckCibilComponent {


  constructor(private registerService: RegistrationServiceService, private cibilService: CheckCibilService,
    private activRoute: ActivatedRoute) { }
    searchText:string;
     
  AllRegister: any[]

  ngOnInit() {

    this.registerService.getRegister().subscribe((response: any) => {
      this.AllRegister = response.responseBody;

    }
    );

  }


  isButtonDisabled = false;
  cibil:number;
  cibilStatus:string;
  checkCibil(data:any){
    // this.user=data;
    console.log("tc cibil")
    this.cibilService.putChekcibil(data).subscribe((response:any)=>{
     this.cibil= response.responseBody.cibilScore;
     this.cibilStatus=response.responseBody.cibilStatus;
     window.location.reload();
    });
    this.isButtonDisabled = true;
    console.log("create")
  }



}
