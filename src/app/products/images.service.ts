import { Injectable } from '@angular/core';
import { Images } from './images.model';

@Injectable()
export class ImagesService {

  books = './assets/images/books/book';
  dvds = './assets/images/dvds/dvd';
  ps4 = './assets/images/ps4/ps4-';

  private images: Images[] = [
    new Images(
      'Books',
      [
        this.books + '1.jpg', this.books + '2.jpg', this.books + '3.jpg',
        this.books + '4.jpg', this.books + '5.jpg', this.books + '6.jpg',
        this.books + '7.jpg', this.books + '8.jpg', this.books + '9.jpg',
        this.books + '10.jpg', this.books + '11.jpg', this.books + '12.jpg'
      ]
    ),
    new Images(
      'PS4 Games',
      [
        this.ps4 + '1.jpg', this.ps4 + '2.jpg', this.ps4 + '3.jpg',
        this.ps4 + '4.jpg', this.ps4 + '5.jpg', this.ps4 + '6.jpg',
        this.ps4 + '7.jpg', this.ps4 + '8.jpg', this.ps4 + '9.jpg',
        this.ps4 + '10.jpg', this.ps4 + '11.jpg', this.ps4 + '12.jpg'
      ]
    )
  ];

  private movieImages: Images[] = [
    new Images(
      'DVDs',
      [
        this.dvds + '1.jpg', this.dvds + '2.jpg', this.dvds + '3.jpg', this.dvds + '4.jpg', this.dvds + '5.jpg', this.dvds + '6.jpg',
        this.dvds + '7.jpg', this.dvds + '8.jpg', this.dvds + '9.jpg', this.dvds + '10.jpg', this.dvds + '11.jpg', this.dvds + '12.jpg',
        this.dvds + '13.jpg', this.dvds + '14.jpg', this.dvds + '15.jpg', this.dvds + '16.jpg'
      ]
    )
  ]

  constructor() { }

  getImages() {
    return this.images.slice();
  }

  getMovies() {
    return this.movieImages.slice();
  }

}
