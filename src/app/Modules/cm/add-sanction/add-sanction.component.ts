import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-add-sanction',
  templateUrl: './add-sanction.component.html',
  styleUrls: ['./add-sanction.component.css']
})
export class AddSanctionComponent {

  constructor(private fb: FormBuilder, private activeRoute: ActivatedRoute,
    private registerService: RegistrationServiceService,
    private router: Router) { }


  AllApprovedRegister: any
  Id: number;
  acoountForm: FormGroup;
  sanctionForm: FormGroup;

  ngOnInit() {
     
      this.sanctionForm = this.fb.group({
        sanctionId: [],
        sanctionDate: [],
        principalAmount:[],
        loanAmount: [],
        rateOfInterest: [],
        tenure: [],
        monthlyEMI: [],
        termsAndCondition: [],
        sanctionLetter: [],
      })



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


  Submit(data:any) {
    this.registerService.gererateSanctionLetter(data,this.sanctionForm.value).subscribe();
    this.router.navigateByUrl("dashboard/CM/sancation")
  }
}
