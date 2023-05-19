import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyDocumentComponent } from './verify-document/verify-document.component';


@NgModule({
  declarations: [
    CheckCibilComponent,
    VerifyDocumentComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
