import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejectCibilComponent } from './reject-cibil/reject-cibil.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { AccountFormComponent } from './account-form/account-form.component';
import { ApprovedCibilComponent } from './approved-cibil/approved-cibil.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { MailSendingDocumentComponent } from './mail-sending-document/mail-sending-document.component';
import { SanctionStatusComponent } from './sanction-status/sanction-status.component';

const routes: Routes = [

  {
    path:"approved",component:ApprovedCibilComponent
  },
  {
    path:"reject",component:RejectCibilComponent
  },
  {
    path:"viewenq",component:ViewEnquiryComponent
  },
  {
    path:"accountForm/:data",component:AccountFormComponent
  },
  {
    path:"upload/:data",component:UploadDetailsComponent
  },
  {
    path:"docStatus",component:MailSendingDocumentComponent
  },
  {
    path:"sanctionstatus",component:SanctionStatusComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
