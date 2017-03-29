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
  // var icon = false;
  // showIcon(beer) {
  //   if(beer.percent >= 7) {
  //     icon = true;
  //   }
  // }

  constructor() { }

  ngOnInit() {
  }
}
