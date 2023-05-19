import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { RejectCibilComponent } from './reject-cibil/reject-cibil.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';

const routes: Routes = [
  {
    path:"addenq",component:AddEnquiryComponent
  },
  {
    path:"cibil",component:CheckCibilComponent
  },
  {
    path:"reject",component:RejectCibilComponent
  },
  {
    path:"viewenq",component:ViewEnquiryComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
