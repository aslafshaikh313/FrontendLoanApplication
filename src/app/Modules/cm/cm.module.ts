import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';
import { GenerateSanctionLetterComponent } from './generate-sanction-letter/generate-sanction-letter.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddSanctionComponent } from './add-sanction/add-sanction.component';


@NgModule({
  declarations: [
    VerifyDocumentComponent,
    GenerateSanctionLetterComponent,
    AddSanctionComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule,Ng2SearchPipeModule,FormsModule,ReactiveFormsModule
  ]
})
export class CmModule { }
