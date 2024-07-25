import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { LoanDisbusmentComponent } from './loan-disbusment/loan-disbusment.component';
import { LeadgerManagmentComponent } from './leadger-managment/leadger-managment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionComponent } from './transaction/transaction.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderByPipe } from 'src/app/Pipes/order-by.pipe';
import { DefaulterComponent } from './defaulter/defaulter.component';


@NgModule({
  declarations: [
    LoanDisbusmentComponent,
    LeadgerManagmentComponent,
    TransactionComponent,OrderByPipe, DefaulterComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule,Ng2SearchPipeModule,FormsModule,ReactiveFormsModule,NgbModule,NgxPaginationModule
  ]
})
export class AhModule { }
