import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SurchargeComponent } from './main/surcharge/surcharge.component';
import { TransportRequestComponent } from './main/transport-request/transport-request.component';
import { SurchargeDetailComponent } from './main/surcharge-detail/surcharge-detail.component';


const routes: Routes = [
  {path: 'surcharge', component: SurchargeComponent},
  {path: 'surcharge-detail', component: SurchargeDetailComponent},
  {path:'', component:TransportRequestComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
