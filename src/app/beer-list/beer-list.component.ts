import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './../beer-list.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})

export class BeerListComponent implements OnInit {
  @Input() childBeerList: Beer[];
  @Output() clickSender = new EventEmitter;

  filterByContent: string = "lowContentBeers";

  onChange(optionFromMenu) {
  this.filterByContent = optionFromMenu;
  }

  editButtonHasBeenClicked(kegToEdit: Beer) {
   this.clickSender.emit(kegToEdit);
  }

  beerSpecial(beer) {
    var color;
    if (beer.percent > 7) {
      color = "bg-warning";
    } else if(beer.price <= 4){
      color = "bg-success";
    } else if(beer.price > 4){
      color = "bg-info";
    }
    return color;
  }

  sellPint(beer) {
    var newAmount = beer.amount -= 1;
    beer.amount = newAmount;
  }

  stockWarning(beer) {
    var color;
    if (beer.amount <= 10) {
      color = "bg-danger";
    }
    return color;
  }



  constructor() { }

  ngOnInit() {
  }
}
