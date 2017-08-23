import { Component, OnInit, Input } from '@angular/core';
import { Images } from '../images.model';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {
  @Input() imageObject: Images;
  @Input() index: number;

  constructor() { }

  ngOnInit() {

  }

}
