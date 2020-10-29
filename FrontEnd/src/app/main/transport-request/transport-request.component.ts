import { Component, OnInit } from '@angular/core';
import { TransportRequestInforService } from 'src/app/shared/service/service.service';
import * as $ from 'jquery';
import {Router} from '@angular/router'
@Component({
  selector: 'app-transport-request',
  templateUrl: './transport-request.component.html',
  styleUrls: ['./transport-request.component.css']
})
export class TransportRequestComponent implements OnInit {

  constructor(public tranService: TransportRequestInforService, public router: Router) { }

  ngOnInit(): void {    
  }
  next(){
    if(this.checkFormData(this.tranService.formData))
    {
    this.router.navigateByUrl('/surcharge');
    }
  }
  checkFormData(formData){
    if(Object.keys(formData).length === 0)
    return false;
    return true;
    // for(let key in formData)
    //   if(formData[key]=="")
    //     return false;
    // return true;

  }
}
