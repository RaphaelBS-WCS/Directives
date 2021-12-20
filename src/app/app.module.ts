import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HighlightDirective} from "./highlight.directive";
import { DisplayGuestsDirective } from './display-guests.directive';
import { ShowMoviesDirective } from './show-movies.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DisplayGuestsDirective,
    ShowMoviesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
