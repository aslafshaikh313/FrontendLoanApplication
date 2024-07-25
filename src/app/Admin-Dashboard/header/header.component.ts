import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

constructor(private router:Router){}

logout(){
  Swal.fire({
    title: 'Confirmation',
    text: 'Are you sure for Logout?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.value) {
      this.router.navigateByUrl("/login")
    } else {
      this.router.navigateByUrl("/dashboard")
    }
  });
  
}

}
