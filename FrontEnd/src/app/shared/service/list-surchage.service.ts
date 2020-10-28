import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListSurchage } from '../model/model.model';

@Injectable({
  providedIn: 'root'
})
export class ListSurchageService {
  listSurchage: ListSurchage[];
  public surcharge:any;
  readonly rootURL = 'http://localhost:51279/api';

  constructor(private http: HttpClient){}
  getAllListSurchage(){
    this.http
    .get(`${this.rootURL}/catCharges/`)
    .toPromise()
    .then((res) => {this.listSurchage = res as ListSurchage[];
    });  }
  
}
