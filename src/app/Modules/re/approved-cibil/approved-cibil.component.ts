import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckCibilService } from 'src/app/service/check-cibil.service';
import { EmailService } from 'src/app/service/email.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-approved-cibil',
  templateUrl: './approved-cibil.component.html',
  styleUrls: ['./approved-cibil.component.css']
})
export class ApprovedCibilComponent {

  constructor(private registerService: RegistrationServiceService, private cibilService: CheckCibilService,
    private activRoute: ActivatedRoute, private emailService: EmailService,
    private router:Router) { }

    searchText:string;
  AllApprovedRegister: any[]

  ngOnInit() {

    this.registerService.getRegister().subscribe((response: any) => {
      this.AllApprovedRegister = response.responseBody;

    }
    );

  }


  sendMail(data: any) {

    this.emailService.sendMail(data).subscribe();
    alert("Send")
  }

  createApplication(en:any){
    this.router.navigateByUrl("dashboard/RE/upload/"+JSON.stringify(en))
  }
}
