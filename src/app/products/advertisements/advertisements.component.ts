import { Component, OnInit } from '@angular/core';
import { AdvertisementsService } from './advertisements.service';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css'],
  providers: [AdvertisementsService]
})
export class AdvertisementsComponent implements OnInit {
  advertisements: string[];

  constructor(private adService: AdvertisementsService) { }

  ngOnInit() {
    this.advertisements = this.adService.getAds();
  }

}
