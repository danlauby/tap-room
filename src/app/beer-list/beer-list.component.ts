import { Component, OnInit, Input } from '@angular/core';
import { Beer } from './../beer-list.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent implements OnInit {
  @Input() childBeerList: Beer[];

  beerSpecial(beer) {
    if (beer.price > 4) {
      return "bg-info";
    } else {
      return "bg-success";
    }
  }

  constructor() { }

  ngOnInit() {
  }
}
