import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Beer } from './../beer-list.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent implements OnInit {
  @Output() newKegSender = new EventEmitter();
  submitForm(name: string, brand: string, price: number, percent: number, amount: number) {
    var newKegToAdd: Beer = new Beer(name, brand, price, percent, amount);
    this.newKegSender.emit(newKegToAdd);
  }

  constructor() { }

  ngOnInit() {
  }

}
