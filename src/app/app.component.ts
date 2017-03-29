import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Get Sum!';
  beers: Beer[] = [
    new Beer('Lonely', 'St. Pauli Girl', 5, '7.9%'),
    new Beer('Grumpy', 'Corona', 4, '5.5%'),
    new Beer('Sleepy', 'Bud', 3, '4.9%'),
    new Beer('Fluffy', 'Stella Artois', 8, '13.9'),
    new Beer('Dopey', 'Fat Tire', 2, '2.9%'),
  ];

}

export class Beer {
  public done: boolean = false;
  constructor(public name: string, public brand: string, public price: number, public percent: string) { }
}
