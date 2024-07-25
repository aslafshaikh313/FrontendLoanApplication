import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private adminService: AdminService) {

  }

  AdminData: any
  ngOnInit() {
    this.loginForm = this.fb.group({
      adminUserName: [],
      adminPassword: []
    })


  }

  adminType: any
  Officer: any;

  loginSumbit() {
    console.log(this.loginForm.value);

    this.adminService.getAdmin(this.loginForm.controls['adminUserName'].
      value, this.loginForm.controls['adminPassword'].value).subscribe((response: any) => {
        this.Officer = response.responseBody.adminDesignation
        this.adminType = response.responseBody.adminType

        localStorage.setItem("userType", this.adminType);
      localStorage.setItem("offices", this.Officer);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log in Successfull for'+this.Officer,
        showConfirmButton: true,
        timer: 2000
      })
      this.router.navigateByUrl("/dashboard/"+this.adminType);
      })



    // if (this.loginForm.controls["adminUserName"].value == "re" && this.loginForm.controls['adminPassword'].value == "re") {
    //   localStorage.setItem("userType", "RE");
    //   localStorage.setItem("offices", "Relational Executive");
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Log in Successfull for Relational Executive',
    //     showConfirmButton: true,
    //     timer: 2000
    //   })
    //   this.router.navigateByUrl("/dashboard/RE");
    // } else if (this.loginForm.controls["adminUserName"].value == "oe" && this.loginForm.controls['adminPassword'].value == "oe") {
    //   localStorage.setItem("userType", "OE");
    //   localStorage.setItem("offices", "Operational Executive");
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Log in Successfull for Operational Executive',
    //     showConfirmButton: true,
    //     timer: 2000
    //   })
    //   this.router.navigateByUrl("/dashboard/OE");
    // } else if (this.loginForm.controls["adminUserName"].value == "cm" && this.loginForm.controls['adminPassword'].value == "cm") {
    //   localStorage.setItem("userType", "CM");
    //   localStorage.setItem("offices", "Credit Manager");
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Log in Successfull for Credit Manager',
    //     showConfirmButton: true,
    //     timer: 2000
    //   })
    //   this.router.navigateByUrl("/dashboard/CM");
    // } else if (this.loginForm.controls["adminUserName"].value == "ah" && this.loginForm.controls['adminPassword'].value == "ah") {
    //   localStorage.setItem("userType", "AH");
    //   localStorage.setItem("offices", "Account Head");
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Log in Successfull for Account Head',
    //     showConfirmButton: true,
    //     timer: 2000
    //   })
    //   this.router.navigateByUrl("/dashboard/AH");
    // }
    // else {
    //   Swal.fire({
    //     position: 'center',
    //     icon: 'error',
    //     title: 'Log in Failed Invalid Username & Password',
    //     showConfirmButton: true,
    //     timer: 2000
    //   })
    // }

  }
}
