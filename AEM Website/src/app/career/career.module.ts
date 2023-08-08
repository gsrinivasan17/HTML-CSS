import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { CareersComponent } from './careers/careers.component';



@NgModule({
  declarations: [
    CareersComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
   
  ],
  exports:[
    CareersComponent
  ]
})
export class CareerModule { }
