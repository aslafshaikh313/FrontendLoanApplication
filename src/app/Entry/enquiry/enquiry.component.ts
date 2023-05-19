import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnquiryServiceService } from 'src/app/service/enquiry-service.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent {
  enquiryForm: FormGroup;
  constructor(private fb: FormBuilder, private ec: EnquiryServiceService) {}
  ngOnInit() {
    this.enquiryForm = this.fb.group({
      userId: [],
      userFirstName: [],
      userLastName: [],
      userEmailId: [],
      userMobileNo: [],
      userPanCardNo: [],
      remark: [],
    });
  }

  enquiryFormsubmit()
  {
    console.log(this.enquiryForm.value);
  }
}
