import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryServiceService } from 'src/app/service/enquiry-service.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css'],
})
export class UploadDetailsComponent {
  constructor(
    private fb: FormBuilder,
    private activeRoute: ActivatedRoute,
    private registerService: RegistrationServiceService,
    private enquiryService: EnquiryServiceService,
    private router:Router
  ) { }

  step: any = 1;

  next() {
    this.step = this.step + 1;
  }
  previous() {
    this.step = this.step - 1;
  }

  acoountForm: FormGroup;
  addressForm: FormGroup;

  professionForm: FormGroup;
  
  propertiesForm: FormGroup;
  bankDetails: FormGroup;
  GarantorForm: FormGroup;
  ngOnInit() {
    (this.acoountForm = this.fb.group({
      userId: [],
      userFirstName: [],
      userLastName: [],
      userEmailId: [],
      userMobileNo: [],
      userPanCardNo: [],
      userGender: [],
      userUserName: [],
      userPassword: [],
      cibil: [],
      address: [],
      profession: [],
      property: [],
      userBankDetails: [],
      guarantorDetails: [],
      customerLoanStatus:[],
    })),
      (this.addressForm = this.fb.group({
        addressId: [],
        localAreaName: [],
        localStreetName: [],
        localLandmark: [],
        localPinCode: [],
        localHouseNo: [],
        localCityName: [],
        localState: [],
      })),
      (this.professionForm = this.fb.group({
        userId: [],
        userCompanyName: [],
        userCompanyAddress: [],
        userDesignation: [],
        userIncome: [],
      })),
      (this.propertiesForm = this.fb.group({
        propertyId: [],
        propertyType: [],
        propertyLocation: [],
        propertyValue: [],
      })),
      (this.bankDetails = this.fb.group({
        userBankDetailsId: [],
        userBankAccountNo: [],
        userBankName: [],
        userBankBranchName: [],
        userBankIfSCNo: [],
      })),
      (this.GarantorForm = this.fb.group({
        gurantorId: [],
        gurantorName: [],
        gurantorDOB: [],
        gurantorRelationWithUser: [],
        gurantorMobileNo: [],
        gurantorAddress: [],
        gurantorOccupation: [],
        gurantorAdharCardNo: [],
      })),
      this.getFromDataView();
  }

  RegisterData: any;
  getFromDataView() {
    this.activeRoute.paramMap.subscribe((param) => {
      this.RegisterData = JSON.parse(param.get('data'));
    });
    if (this.RegisterData !== null) {
      this.acoountForm.patchValue({
        userId: this.RegisterData.userId,
        userFirstName: this.RegisterData.userFirstName,
        userLastName: this.RegisterData.userLastName,
        userEmailId: this.RegisterData.userEmailId,
        userMobileNo: this.RegisterData.userMobileNo,
        userPanCardNo: this.RegisterData.userPanCardNo,
        userUserName: this.RegisterData.userUserName,
        userPassword: this.RegisterData.userPassword,
        userGender: this.RegisterData.userGender,
        cibil: this.RegisterData.cibil,
        customerLoanStatus:this.RegisterData.customerLoanStatus
      });
    }
  }


  adharcard: File;
  getAdharFile(event) {

    this.adharcard = event.target.files[0];

  }
  pancard: File;
  getPancardFile(event) {

    this.pancard = event.target.files[0];

  }
  adressprof: File;
  getAddressFile(event) {

    this.adressprof = event.target.files[0];

  }
  photo: File;
  getPhotoFile(event) {

    this.photo = event.target.files[0];

  }
  signiture: File;
  getsSignitureFile(event) {

    this.signiture = event.target.files[0];

  }


  onSubmit() {
    this.step = this.step + 1;

    const data=new FormData;
    data.append('adharCard',this.adharcard);
    data.append('panCard',this.pancard);
    data.append('addressProof',this.adressprof);
    data.append('photo',this.photo);
    data.append('signature',this.signiture);

    this.acoountForm.controls["address"].setValue(this.addressForm.value)
    this.acoountForm.controls["profession"].setValue(this.professionForm.value)
    this.acoountForm.controls["property"].setValue(this.propertiesForm.value)
    this.acoountForm.controls["userBankDetails"].setValue(this.bankDetails.value)
    this.acoountForm.controls["guarantorDetails"].setValue(this.GarantorForm.value);

    data.append('data',JSON.stringify(this.acoountForm.value))

   this.registerService.putRegister(data).subscribe();

    console.log(this.acoountForm.value);
    // const formDataObj: any = {};
    // data.forEach((value, key) => {
    //   formDataObj[key] = value;
    // });
    // console.log(formDataObj['data']);
  }



  Done(){
    this.router.navigateByUrl("dashboard/RE/approved")
  }
}
