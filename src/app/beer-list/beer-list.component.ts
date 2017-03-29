import { Component, OnInit } from '@angular/core';
import { Beer } from './../beer-list.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent implements OnInit {
  beers: Beer[] = [
    new Beer('Lonely', 'St. Pauli Girl', 10, 4.9, 124),
    new Beer('Grumpy', 'Corona', 4, 7.2, 110),
    new Beer('Sleepy', 'Bud', 3, 5.5, 58),
    new Beer('Fluffy', 'Stella Artois', 8, 13.9, 9),
    new Beer('Dopey', 'Fat Tire', 2, 4.0, 3),
  ];

  constructor() { }

  ngOnInit() {
  }
  beerSpecial(beer) {
    if (beer.price > 4) {
      return "bg-info";
    } else {
      return "bg-success";
    }
  }
}
