import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransportRequestComponent } from 'src/app/main/transport-request/transport-request.component';
import { TransportRequestInfor } from '../../model/model.model';
import { TransportRequestInforService } from '../../service/service.service';


@Component({
  selector: 'app-transport-request-infor',
  templateUrl: './transport-request-infor.component.html',
  styleUrls: ['./transport-request-infor.component.css']
})
export class TransportRequestInforComponent implements OnInit {

  constructor( public tranService: TransportRequestInforService) { }

  ngOnInit(): void {
  }
  getInforTransportRequest(){
    this.tranService.getAllInforTransportRequest().subscribe((res)=>{
      for(let infor of res as TransportRequestInfor[])

      
      {
        if(infor.refNo === this.tranService.formData.refNo)
        {
          this.tranService.formData = Object.assign({}, infor);
        }
      }
    })
  }
}
