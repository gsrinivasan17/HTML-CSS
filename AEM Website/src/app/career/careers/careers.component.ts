import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  careerData: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('assets/career.json').subscribe(data => {
      this.careerData = data;
    });
  }
}

