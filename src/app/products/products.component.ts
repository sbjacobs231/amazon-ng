import { Component, OnInit } from '@angular/core';
import { Images } from './images.model';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ImagesService]
})
export class ProductsComponent implements OnInit {
  images: Images[];
  movies: Images[];

  constructor(private imagesService: ImagesService) { }

  ngOnInit() {
    this.images = this.imagesService.getImages();
    this.movies = this.imagesService.getMovies();
  }

}
