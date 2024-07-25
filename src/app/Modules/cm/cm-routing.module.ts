import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateSanctionLetterComponent } from '../cm/generate-sanction-letter/generate-sanction-letter.component';
import { VerifyDocumentComponent } from '../cm/verify-document/verify-document.component';
import { AddSanctionComponent } from './add-sanction/add-sanction.component';

const routes: Routes = [
  {
    path:"sancation",component:GenerateSanctionLetterComponent
  },
  {
    path:"verifyDocc",component:VerifyDocumentComponent
  },
  {
    path:"addsanction",component:AddSanctionComponent
  },
  {
    path:"addsanction/:data",component:AddSanctionComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
