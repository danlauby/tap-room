import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get Sum!';
  beers: Beer[] = [
    new Beer('Lonely', 'St. Pauli Girl', 10, '7.9%',124),
    new Beer('Grumpy', 'Corona', 4, '5.5%',110),
    new Beer('Sleepy', 'Bud', 3, '4.9%',58),
    new Beer('Fluffy', 'Stella Artois', 8, '13.9',9),
    new Beer('Dopey', 'Fat Tire', 2, '2.9%',3),
  ];
  beerSpecial(beer) {
    if (beer.price > 4) {
      return "bg-info";
    } else {
      return "bg-success";
    }
  }
}

export class Beer {
  public done: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public percent: string, public amount: number) { }
}
