import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/service/email.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-defaulter',
  templateUrl: './defaulter.component.html',
  styleUrls: ['./defaulter.component.css']
})
export class DefaulterComponent {

  constructor(private registerService: RegistrationServiceService,
    private activRoute: ActivatedRoute, private emailService: EmailService,
    private router: Router, private modalService: NgbModal) { 
  }


  Id: number
  searchText: string;
  AllApprovedRegister: any[]
  Data:  any[]
  ngOnInit() {

    this.registerService.getRegister().subscribe((response: any) => {
      this.Data = response.responseBody;

    }
    );
    
    this.registerService.getPaidUnpaidData("Defaulter").subscribe((response: any) =>{
      this.AllApprovedRegister = response.responseBody;
    })

  }

  content: any;

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

}
