import { Component, OnInit, ViewChild } from '@angular/core';
import { ListSurchageService } from 'src/app/shared/service/list-surchage.service';

@Component({
  selector: 'app-surcharge-detail-upload',
  templateUrl: './surcharge-detail-upload.component.html',
  styleUrls: ['./surcharge-detail-upload.component.css']
})
export class SurchargeDetailUploadComponent implements OnInit {

  constructor(public listSurchageService: ListSurchageService) { }
  public surCharge;
  ngOnInit(): void {
    this.surCharge = this.listSurchageService.surcharge;
  }
  chooseSurcharge(){
    
  }
}
