import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/service/email.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  constructor(private registerService: RegistrationServiceService,
    private activRoute: ActivatedRoute, private emailService: EmailService,
    private router: Router, private modalService: NgbModal) { }


  Id: number
  searchText: string;
  AllApprovedRegister: any[]
  emiData: Array<any>;

  pageSize = 12;
  page = 1;
  ngOnInit() {

    this.registerService.getRegister().subscribe((response: any) => {
      this.AllApprovedRegister = response.responseBody;

      this.Id = response.responseBody.userId
      // console.log(this.Id)
    }
    );

  }

  openLg(content, userId: any) {

    this.modalService.open(content, { size: 'xl' });
    this.Id = userId;
    alert(this.Id)
  }

  sendMail(data: any) {

    alert("Send")
  }


 
  paid(userId:any,e:any){
    this.registerService.addLedger(userId,e).subscribe();
    alert("User id :" +userId + "EMI Id :"+e.value)
  }

  unPaid(userId:any,e:any){
    this.registerService.addDefaulter(userId,e).subscribe();
    alert("User id :" +userId + "EMI Id :"+e.value)
  }





}
