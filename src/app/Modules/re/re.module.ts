import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { RejectCibilComponent } from './reject-cibil/reject-cibil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountFormComponent } from './account-form/account-form.component';
import { ApprovedCibilComponent } from './approved-cibil/approved-cibil.component';
import { UploadDetailsComponent } from './upload-details/upload-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MailSendingDocumentComponent } from './mail-sending-document/mail-sending-document.component';
import { SanctionStatusComponent } from './sanction-status/sanction-status.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({
  declarations: [
    ViewEnquiryComponent,
    RejectCibilComponent,
    AccountFormComponent,
    ApprovedCibilComponent,
    UploadDetailsComponent,
    MailSendingDocumentComponent,
    SanctionStatusComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,FormsModule,ReactiveFormsModule,Ng2SearchPipeModule,PdfViewerModule
  ]
})
export class ReModule { }
