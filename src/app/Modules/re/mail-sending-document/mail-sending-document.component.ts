import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-mail-sending-document',
  templateUrl: './mail-sending-document.component.html',
  styleUrls: ['./mail-sending-document.component.css']
})
export class MailSendingDocumentComponent {

  constructor(private registerService: RegistrationServiceService,
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
    
     this.emailService.sendMailForDocVerified(data).subscribe();


  }

}
