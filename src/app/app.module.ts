import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Entry/navbar/navbar.component';
import { LandingPageComponent } from './Entry/landing-page/landing-page.component';
import { BodyContentComponent } from './Entry/body-content/body-content.component';
import { FooterComponent } from './Entry/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Entry/login/login.component';
import { RegisterComponent } from './Entry/register/register.component';
import { EnquiryComponent } from './Entry/enquiry/enquiry.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Admin-Dashboard/dashboard/dashboard.component';
import { SidebarComponent } from './Admin-Dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './Admin-Dashboard/header/header.component';
import { EmiCalculatorComponent } from './Entry/emi-calculator/emi-calculator.component';
import { Ng5SliderModule } from 'ng5-slider';
import  {HttpClientModule} from "@angular/common/http";
import { FAQSComponent } from './Entry/faq-s/faq-s.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    BodyContentComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    EnquiryComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    EmiCalculatorComponent,
    FAQSComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng5SliderModule,
    HttpClientModule,PdfViewerModule,NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
