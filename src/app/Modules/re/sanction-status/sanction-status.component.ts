import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmailService } from 'src/app/service/email.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

// <iframe width="480px" height="600px" src="../../../../assets/images/Global Fianance Sanction Letter.pdf"></iframe>

@Component({
  selector: 'app-sanction-status',
  templateUrl: './sanction-status.component.html',
  styleUrls: ['./sanction-status.component.css'],
})
export class SanctionStatusComponent {
content: any;
  constructor(
    private registerService: RegistrationServiceService,
    private activRoute: ActivatedRoute,
    private emailService: EmailService,
    private router: Router,
    private modalService: NgbModal
  ) {}
  Id:number;
  searchText: string;
  AllApprovedRegister: any[];
  sanctionss:any;
  ngOnInit() {
    this.registerService.getRegister().subscribe((response: any) => {
      this.AllApprovedRegister = response.responseBody;
    });
  }

  sendMailForSanction(data: any) {
    this.emailService.sendMailForSanctionLetter(data).subscribe();
    alert('Send');
  }

  createApplication(en: any) {
    this.router.navigateByUrl('dashboard/RE/upload/' + JSON.stringify(en));
  }

  openLg(content,data:any) {
    this.sanctionss=data;
     
    alert(this.sanctionss);
    this.modalService.open(content, { size: 'xl' });
  }
}
