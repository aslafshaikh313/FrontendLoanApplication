import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { LoanDisbusmentComponent } from './loan-disbusment/loan-disbusment.component';
import { LeadgerManagmentComponent } from './leadger-managment/leadger-managment.component';


@NgModule({
  declarations: [
    LoanDisbusmentComponent,
    LeadgerManagmentComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule
  ]
})
export class AhModule { }
