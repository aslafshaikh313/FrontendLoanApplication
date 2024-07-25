import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckCibilService } from 'src/app/service/check-cibil.service';
import { EmailService } from 'src/app/service/email.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-reject-cibil',
  templateUrl: './reject-cibil.component.html',
  styleUrls: ['./reject-cibil.component.css']
})
export class RejectCibilComponent {

  constructor(private registerService: RegistrationServiceService, private cibilService: CheckCibilService,
    private activRoute: ActivatedRoute, private emailService: EmailService) { }
    searchText:string;

  AllRegister: any[]

  ngOnInit() {

    this.registerService.getRegister().subscribe((response: any) => {
      this.AllRegister = response.responseBody;

    }
    );

  }


  sendMail(data: any) {

    this.emailService.sendMail(data).subscribe();
    alert("Send")
  }


}
