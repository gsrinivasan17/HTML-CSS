import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BadgeComponent } from './badge/badge.component';
import { BannerComponent } from './banner/banner.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';


@NgModule({
  declarations: [
    BadgeComponent,
    BannerComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    
  ],
  exports:[
    BadgeComponent,
    BannerComponent,
    ContactInfoComponent
  ]

})
export class MainModule { }
