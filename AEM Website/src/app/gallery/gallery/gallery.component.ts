import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: string[] = [
    'assets/ADS18022.JPG',
    'assets/ADS18034.JPG',
    'assets/ADS18038.JPG',
    'assets/ADS18041.JPG',
    'assets/ADS18043.JPG',
    'assets/ADS17998.JPG',
    'assets/ADS18001.JPG',
    'assets/ADS18004.JPG',
    'assets/ADS18005.JPG',
    'assets/ADS18019.JPG',
    'assets/ADS18022.JPG',
    'assets/ADS18012.JPG'
    ];
    
    enlargedImage: string | null = null;
    
    enlargeImage(image: string) {
    this.enlargedImage = image;
    }
    
    closeModal() {
    this.enlargedImage = null;
    }
}
