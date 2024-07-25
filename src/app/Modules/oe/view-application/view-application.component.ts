import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryServiceService } from 'src/app/service/enquiry-service.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-view-application',
  templateUrl: './view-application.component.html',
  styleUrls: ['./view-application.component.css']
})
export class ViewApplicationComponent {

  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute,
    private registerService:RegistrationServiceService ,private enquiryService:EnquiryServiceService,
    private router:Router) { }


    AllApprovedRegister:any
    Id:number;
    acoountForm: FormGroup;
    ngOnInit() {
      this.acoountForm = this.fb.group({
        userId: [],

      }),
        this.getFromDataView();


        this.registerService.getRegister().subscribe((response: any) => {
          this.AllApprovedRegister = response.responseBody;

        }
        );

    }



  EnquiryData: any
  getFromDataView() {

    this.activeRoute.paramMap.subscribe(param => {
      this.Id = JSON.parse(param.get('data'));

    })

  }


  varifiedDoc(userId:any){
    this.registerService.updateDocumentStatus(userId,"DocumentVerified").subscribe();
    this.router.navigateByUrl("dashboard/OE/verifyDoc")
  }

  rejectDoc(userId:any){
    this.registerService.updateDocumentStatus(userId,"DocumentRejected").subscribe();
    this.router.navigateByUrl("dashboard/OE/verifyDoc")
  }
}
