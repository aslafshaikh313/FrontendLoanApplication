import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';
import { GenerateSanctionLetterComponent } from './generate-sanction-letter/generate-sanction-letter.component';


@NgModule({
  declarations: [
    VerifyDocumentComponent,
    GenerateSanctionLetterComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule
  ]
})
export class CmModule { }
