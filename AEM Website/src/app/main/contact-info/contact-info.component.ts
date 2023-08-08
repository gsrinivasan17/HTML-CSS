import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  public ContactInformationList !: contactInformation[];

   constructor() {
    this.ContactInformationList = [
      {header: 'Company Address', details : 'Ajantha Earthmovers Pvt Ltd, 264/6, Anbu Colony, Anna Nagar West, Chennai - 600040',icon:'fa fa-map-marker' },
      {header: 'Email', details : 'www.ajanthaearthmovers.com',icon:'fa fa-envelope'},
      {header: 'Phone Number', details : 'Mobile:+91 9444043661, Phone:+91 04426180349',icon:'fa fa-mobile' },
    ]
  }
}

export class contactInformation{
  public header!:string;
  public details!:string;
  public icon!:string;
 
}