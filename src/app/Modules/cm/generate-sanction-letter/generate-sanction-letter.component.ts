import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationServiceService } from 'src/app/service/registration-service.service';

@Component({
  selector: 'app-generate-sanction-letter',
  templateUrl: './generate-sanction-letter.component.html',
  styleUrls: ['./generate-sanction-letter.component.css']
})
export class GenerateSanctionLetterComponent {

  constructor(private registerService: RegistrationServiceService,
    private activRoute: ActivatedRoute,
    private router:Router) { }

    searchText:string;
  AllApprovedRegister: any[]

  ngOnInit() {

    this.registerService.getRegister().subscribe((response: any) => {
      this.AllApprovedRegister = response.responseBody;

    }
    );
}


generate(data:any){
  this.router.navigateByUrl("dashboard/CM/addsanction/"+JSON.stringify(data));
}
}
