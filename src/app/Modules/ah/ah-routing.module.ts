import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanDisbusmentComponent } from './loan-disbusment/loan-disbusment.component';
import { LeadgerManagmentComponent } from './leadger-managment/leadger-managment.component';

const routes: Routes = [
  {
    path:"loanDis",component:LoanDisbusmentComponent
  },
  {
    path:"leadgerM",component:LeadgerManagmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
