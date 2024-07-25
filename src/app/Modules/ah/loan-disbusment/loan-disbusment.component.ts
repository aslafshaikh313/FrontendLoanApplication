import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/service/email.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-loan-disbusment',
  templateUrl: './loan-disbusment.component.html',
  styleUrls: ['./loan-disbusment.component.css']
})
export class LoanDisbusmentComponent {

  content: any;
  constructor(
    private registerService: RegistrationServiceService,
    private activRoute: ActivatedRoute,
    private emailService: EmailService,
    private router: Router,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }
  Id: number;
  searchText: string;
  AllApprovedRegister: any;
  sanctionss: any;

  loanDisbusForm: FormGroup
  ngOnInit() {

    this.loanDisbusForm = this.fb.group({
      disbursalId: [],
      totalSanctionLoan: [],
      totalAmountPaid: [],
      emiDate: [],
      paymentStatus: [],
      userTransactionNo: [],
      userBankAccountNo: [],
      userBankName: [],
      userBankIfSCNo: [],
      userBranchName: [],
    })



    this.registerService.getRegister().subscribe((response: any) => {
      this.AllApprovedRegister = response.responseBody;
    });
  }

  sendMail(data: any) {
    this.emailService.sendMail(data).subscribe();
    alert('Send');
  }


  openLg(content, data: any) {
    this.sanctionss = data;

    this.modalService.open(content, { size: 'xl' });
  }



  Submit(data: any) {

    this.loanDisbusForm.controls['totalSanctionLoan'].setValue(data.sanctionLetter.loanAmount);
    this.loanDisbusForm.controls['userBankName'].setValue(data.userBankDetails.userBankName);
    this.loanDisbusForm.controls['userBankIfSCNo'].setValue(data.userBankDetails.userBankIfSCNo);
    this.loanDisbusForm.controls['userBranchName'].setValue(data.userBankDetails.userBankBranchName);
    this.loanDisbusForm.controls['userBankAccountNo'].setValue(data.userBankDetails.userBankAccountNo);

    console.log(this.loanDisbusForm.value)
    
    data.loanDisburse==(this.loanDisbusForm.value)
    this.registerService.putLoandisbus(this.loanDisbusForm,data).subscribe();
  
 
    this.router.navigateByUrl("dashboard/AH/loanDis")
  }
}
