import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private fb:FormBuilder,private rs:RegistrationServiceService,
    private adminService:AdminService,private router: Router){

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
      adminType:[]
    })
  }

  registerSubmit()
  {
    console.log(this.registerForm.value);
  this.adminService.postAdmin(this.registerForm.value).subscribe();
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Admin Register Successfully',
    showConfirmButton: true,
    timer: 2000
  })
  this.router.navigateByUrl("/dashboard/login");

  }
}
