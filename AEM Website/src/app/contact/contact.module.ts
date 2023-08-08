import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { FormsModule } from '@angular/forms';
import { ContactHeaderComponent } from './contact-header/contact-header.component';


@NgModule({
  declarations: [
    ContactComponent,
    MapComponent,
    ContactHeaderComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule
  ],
  exports:[
    ContactComponent,
    MapComponent,
    ContactHeaderComponent
  ]
})
export class ContactModule { }
