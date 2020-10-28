import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as $ from 'jquery';
import { ListSurchageService } from 'src/app/shared/service/list-surchage.service';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {

  constructor(public router: Router, public listSurchageService: ListSurchageService) { }
  

  ngOnInit(): void {
    //this.listSurchageService.getAllListSurchage();
    this.listSurchageService.getAllListSurchage();
  }
  back(){
  }
  chooseSurcharge(){
    this.listSurchageService.surcharge = $('#surcharge').val();
    const navigateToSurchargeDetail: NavigationExtras={};
    this.router.navigate(['/surcharge-detail'], navigateToSurchargeDetail);
  }
}
