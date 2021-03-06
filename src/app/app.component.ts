import { Component } from '@angular/core';
import { Beer } from './beer-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Tipsy Server";
  selectedBeer = null;

  masterBeerList: Beer[] = [
    new Beer('Lonely', 'St. Pauli Girl', 10, 4.9, 124),
    new Beer('Grumpy', 'Corona', 4, 7.2, 110),
    new Beer('Sleepy', 'Bud', 3, 5.5, 58),
    new Beer('Fluffy', 'Stella Artois', 8, 13.9, 9),
    new Beer('Dopey', 'Fat Tire', 2, 4.0, 3),
  ];


  editBeer(clickedBeer) {
    this.selectedBeer = clickedBeer;
  }
  finishedEditing() {
   this.selectedBeer = null;
  }



  addKeg(newKegFromChild: Beer) {
    this.masterBeerList.push(newKegFromChild);
  }

}
