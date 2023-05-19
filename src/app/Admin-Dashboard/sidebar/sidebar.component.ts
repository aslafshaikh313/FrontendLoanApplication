import { Component } from '@angular/core';
import { UserMenus } from 'src/app/model/user-menus';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  userType:string;
  menus:any[];

ngOnInit(){

  this.userType=localStorage.getItem('userType');
  this.menus=UserMenus.menus
}
}
