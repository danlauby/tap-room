import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { QuantityComponent } from './quantity/quantity.component';
import { PercentComponent } from './percent/percent.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { HighContentPipe } from './high-content.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    QuantityComponent,
    PercentComponent,
    NewKegComponent,
    EditKegComponent,
    HighContentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
