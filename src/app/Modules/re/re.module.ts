import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { RejectCibilComponent } from './reject-cibil/reject-cibil.component';


@NgModule({
  declarations: [
    ViewEnquiryComponent,
    AddEnquiryComponent,
    CheckCibilComponent,
    RejectCibilComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule
  ]
})
export class ReModule { }
