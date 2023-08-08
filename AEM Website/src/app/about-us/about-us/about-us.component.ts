import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  sections: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('./assets/about-us.json').subscribe(data => {
      this.sections = data.sections;
    });
  }
}
