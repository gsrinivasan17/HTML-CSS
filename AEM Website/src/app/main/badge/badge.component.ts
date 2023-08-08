import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  images = [
    { img: 'assets/ADS18022.JPG' },
    { img: 'assets/ADS18034.JPG' },
    { img: 'assets/ADS18038.JPG' },
    { img: 'assets/ADS18041.JPG' },
    { img: 'assets/ADS18043.JPG' },

  ];
  currentIndex = 0;

  ngOnInit() {
    this.currentIndex = 0;
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousSlide() {
   this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
