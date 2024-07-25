import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ViewApplicationComponent } from './view-application/view-application.component';


@NgModule({
  declarations: [
    CheckCibilComponent,
    VerifyDocumentComponent,
    ViewApplicationComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule,Ng2SearchPipeModule,FormsModule
  ]
})
export class OeModule { }
