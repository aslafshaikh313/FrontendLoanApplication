import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailService } from 'src/app/service/email.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-verify-document',
  templateUrl: './verify-document.component.html',
  styleUrls: ['./verify-document.component.css']
})
export class VerifyDocumentComponent {

  constructor(private registerService: RegistrationServiceService,  
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


view(data:any){
  this.router.navigateByUrl("dashboard/OE/view/"+JSON.stringify(data));
}
}
