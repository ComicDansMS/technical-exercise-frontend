import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { IconFilmComponent } from './icon-film/icon-film.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    MovieListComponent,
    FiltersComponent,
    MovieItemComponent,
    IconFilmComponent
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
