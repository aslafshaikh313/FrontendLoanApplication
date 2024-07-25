import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from '../oe/check-cibil/check-cibil.component';
import { VerifyDocumentComponent } from '../oe/verify-document/verify-document.component';
import { ViewApplicationComponent } from './view-application/view-application.component';

const routes: Routes = [
  {
    path:"cibil",component:CheckCibilComponent
  },
  {
    path:"cibil/:data",component:CheckCibilComponent
  },
  {
    path:"verifyDoc",component:VerifyDocumentComponent
  },
  {
    path:"view",component:ViewApplicationComponent
  },
  {
    path:"view/:data",component:ViewApplicationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
