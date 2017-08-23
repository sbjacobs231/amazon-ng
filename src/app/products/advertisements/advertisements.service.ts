import { Injectable } from '@angular/core';

@Injectable()
export class AdvertisementsService {
  toDirectory = './assets/images/banner/banner';

  private adImages: string[] = [
    this.toDirectory + '0.jpg',
    this.toDirectory + '1.jpg'
  ];

  constructor() { }

  getAds() {
    return this.adImages.slice();
  }

}
