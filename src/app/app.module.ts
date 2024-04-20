import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { IconFilmComponent } from './icons/icon-film/icon-film.component';
import { IconSearchComponent } from './icons/icon-search/icon-search.component';
import { FilterYearComponent } from './filter-year/filter-year.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieListComponent,
    FilterComponent,
    MovieItemComponent,
    IconFilmComponent,
    IconSearchComponent,
    FilterYearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
