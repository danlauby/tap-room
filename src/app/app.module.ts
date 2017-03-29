import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { QuantityComponent } from './quantity/quantity.component';
import { ColorComponent } from './color/color.component';
import { PercentComponent } from './percent/percent.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    QuantityComponent,
    ColorComponent,
    PercentComponent
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
