import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchBar') searchInputRef: ElementRef;
  link = "https://www.amazon.com/s?field-keywords=";

  constructor() { }

  ngOnInit() {
  }

  searchItem(event) {
    const searchValue = this.searchInputRef.nativeElement.value;
    window.location.href = this.link + searchValue;
  }

}
