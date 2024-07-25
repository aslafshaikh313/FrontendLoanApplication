import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CheckCibilService } from 'src/app/service/check-cibil.service';
import { EnquiryServiceService } from 'src/app/service/enquiry-service.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent {


  constructor(private enquiryService: EnquiryServiceService,
    private cibilService: CheckCibilService,
    private router: Router) { }
    searchText:string
  AllEnquiry: any[]

  ngOnInit() {

    this.enquiryService.getEnquiry().subscribe((response: any) => {
      this.AllEnquiry = response.responseBody;

    }
    );

  }

  isButtonDisabled = false;
  cibil: number;
   
 createAccount(enquiryData:any){
  this.router.navigateByUrl("dashboard/RE/accountForm/"+JSON.stringify(enquiryData));
 

 }

}
