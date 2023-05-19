import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from '../oe/check-cibil/check-cibil.component';
import { VerifyDocumentComponent } from '../oe/verify-document/verify-document.component';

const routes: Routes = [
  {
    path:"cibil",component:CheckCibilComponent
  },
  {
    path:"verifyDoc",component:VerifyDocumentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
