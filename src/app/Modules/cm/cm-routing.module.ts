import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateSanctionLetterComponent } from '../cm/generate-sanction-letter/generate-sanction-letter.component';
import { VerifyDocumentComponent } from '../cm/verify-document/verify-document.component';

const routes: Routes = [
  {
    path:"sancation",component:GenerateSanctionLetterComponent
  },
  {
    path:"verifyDocc",component:VerifyDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
