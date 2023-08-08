import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AboutUsRoutingModule,
   
  ],
  exports:[
    AboutUsComponent
  ]
})
export class AboutUsModule { }
