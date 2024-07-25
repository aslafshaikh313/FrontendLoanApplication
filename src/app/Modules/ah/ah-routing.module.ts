import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanDisbusmentComponent } from './loan-disbusment/loan-disbusment.component';
import { LeadgerManagmentComponent } from './leadger-managment/leadger-managment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DefaulterComponent } from './defaulter/defaulter.component';

const routes: Routes = [
  {
    path:"loanDis",component:LoanDisbusmentComponent
  },
  {
    path:"ledger",component:LeadgerManagmentComponent
  },
  {
    path:"transaction",component:TransactionComponent
  },
  {
    path:'default',component:DefaulterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
