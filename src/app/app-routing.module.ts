import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent} from './Entry/navbar/navbar.component';
import { BodyContentComponent } from './Entry/body-content/body-content.component';
import { LoginComponent } from './Entry/login/login.component';
import { RegisterComponent } from './Entry/register/register.component';
import { EnquiryComponent } from './Entry/enquiry/enquiry.component';
import { DashboardComponent } from './Admin-Dashboard/dashboard/dashboard.component';
import { EmiCalculatorComponent } from './Entry/emi-calculator/emi-calculator.component';

const routes: Routes = [
      {
        path:"",component:NavbarComponent,
        children:[
          {
            path:"",component:BodyContentComponent
          },
          {
            path:"login",component:LoginComponent
          },
          {
            path:"register",component:RegisterComponent
          },
          {
            path:"enquiry",component:EnquiryComponent
          }
        ]
      },
      {
        path:"dashboard",component:DashboardComponent,
        children:[
          {
            path:"RE",loadChildren:()=>import("src/app/Modules/re/re.module").then(re=>re.ReModule)
          },
          {
            path:"OE",loadChildren:()=>import("src/app/Modules/oe/oe.module").then(oe=>oe.OeModule)
          },
          {
            path:"CM",loadChildren:()=>import("src/app/Modules/cm/cm.module").then(cm=>cm.CmModule)
          },
          {
            path:"AH",loadChildren:()=>import("src/app/Modules/ah/ah.module").then(ah=>ah.AhModule)
          }
        ]
      },
      {
        path:"emi",component:EmiCalculatorComponent
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
