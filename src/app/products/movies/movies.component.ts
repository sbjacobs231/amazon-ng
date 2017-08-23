import { Component, OnInit, Input } from '@angular/core';
import { Images } from '../images.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input('movieImage') imageObject: Images;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
