import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from './../beer-list.model';


@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})


export class EditKegComponent implements OnInit {
   @Input() childSelectedBeer: Beer;
   @Output() doneButtonClickedSender = new EventEmitter();

   doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
