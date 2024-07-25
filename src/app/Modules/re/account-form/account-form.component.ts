import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryServiceService } from 'src/app/service/enquiry-service.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent {
  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute,
    private registerService:RegistrationServiceService ,private enquiryService:EnquiryServiceService,
    private router:Router) { }

  step: any = 1;

  next() {
    this.step = this.step + 1;

  }
  previous() {
    this.step = this.step - 1;

  }

  acoountForm: FormGroup;
  ngOnInit() {
    this.acoountForm = this.fb.group({
      userId: [],
      userFirstName: [],
      userLastName: [],
      userEmailId: [],
      userMobileNo: [],
      userPanCardNo: [],
      userGender: [],
      userUserName: [],
      userPassword: [],
    }),
      this.getFromDataView();
  }




  EnquiryData: any
  getFromDataView() {

    this.activeRoute.paramMap.subscribe(param => {
      this.EnquiryData = JSON.parse(param.get('data'));
    })
    if (this.EnquiryData != null) {

      this.acoountForm.patchValue({
        userId: this.EnquiryData.userId,
        userFirstName: this.EnquiryData.userFirstName,
        userLastName: this.EnquiryData.userLastName,
        userEmailId: this.EnquiryData.userEmailId,
        userMobileNo: this.EnquiryData.userMobileNo,
        userPanCardNo: this.EnquiryData.userPanCardNo,

      })

    }
  }


OnSubmit(){
  this.step = this.step + 1;
  this.registerService.postRegister(this.acoountForm).subscribe();
  console.log(this.acoountForm.value);

  this.enquiryService.deleteByIdEnquiry(this.acoountForm.value).subscribe();
 
}

Done(){
  this.router.navigateByUrl("dashboard/RE/viewenq")
}

}
