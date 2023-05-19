import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder,private rs:RegistrationServiceService){

  }
  registerForm:FormGroup;

  ngOnInit()
  {
    this.registerForm=this.fb.group({
      adminId:[],
      adminUserName:[],
      adminPassword:[],
      adminDesignation:[],
      adminEmailId:[],
    })
  }

  registerSubmit()
  {
    console.log(this.registerForm.value);
  }
}
