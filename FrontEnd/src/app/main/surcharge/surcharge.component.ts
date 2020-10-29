import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as $ from 'jquery';
import { ListSurchageService } from 'src/app/shared/service/list-surchage.service';
import { TransportRequestInforService } from 'src/app/shared/service/service.service';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {

  constructor(public router: Router, public listSurchageService: ListSurchageService, public tranService: TransportRequestInforService) { }
  

  ngOnInit(): void {
    this.tranService.getInforTransportRequestID("000005000720DVR-VNBDG");

    this.listSurchageService.getAllListSurchage();
  }
  back(){
  }
  chooseSurcharge(){
    console.log(this.tranService.transportRequestInfor);
    this.listSurchageService.surcharge = $('#surcharge').val();
    const navigateToSurchargeDetail: NavigationExtras={};
    this.router.navigate(['/surcharge-detail'], navigateToSurchargeDetail);
  }
}
