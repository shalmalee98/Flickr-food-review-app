import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxStarsModule } from 'ngx-stars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodImagesComponent } from './food-images/food-images.component';
import { HttpClientModule } from '@angular/common/http';
// import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FoodIndividualComponent } from './food-individual/food-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodImagesComponent,
    FoodIndividualComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxStarsModule,
    // InfiniteScrollModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
