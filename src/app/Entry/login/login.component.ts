import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder) {

  }
  ngOnInit()
  {
    this.loginForm=this.fb.group({
      username:[],
      password:[]
    })
  }


  loginSumbit()
  {
    console.log(this.loginForm.value);
    if(this.loginForm.controls["username"].value=="re" && this.loginForm.controls['password'].value=="re")
    {
      localStorage.setItem("userType","RE");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log in Successfull for Relational Executive',
        showConfirmButton: true,
        timer: 2000
      })
      this.router.navigateByUrl("/dashboard/RE");
    }else if(this.loginForm.controls["username"].value=="oe" && this.loginForm.controls['password'].value=="oe")
    {
      localStorage.setItem("userType","OE");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log in Successfull for Operational Executive',
        showConfirmButton: true,
        timer: 2000
      })
      this.router.navigateByUrl("/dashboard/OE");
    }else if(this.loginForm.controls["username"].value=="cm" && this.loginForm.controls['password'].value=="cm")
    {
      localStorage.setItem("userType","CM");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log in Successfull for Credit Manager',
        showConfirmButton: true,
        timer: 2000
      })
      this.router.navigateByUrl("/dashboard/CM");
    }else if(this.loginForm.controls["username"].value=="ah" && this.loginForm.controls['password'].value=="ah")
    {
      localStorage.setItem("userType","AH");
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Log in Successfull for Account Head',
        showConfirmButton: true,
        timer: 2000
      })
      this.router.navigateByUrl("/dashboard/AH");
    }
    else{
      Swal.fire({
        position:'center',
        icon: 'error',
        title: 'Log in Failed Invalid Username & Password',
        showConfirmButton: true,
        timer: 2000
      })
    }

  }
}
