import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MovieListComponent } from './main-list/movie-list/movie-list.component';
import { MovieItemComponent } from './main-list/movie-list/movie-item/movie-item.component';
import { FilterComponent } from './filter/filter.component';
import { FilterYearComponent } from './filter/filter-year/filter-year.component';
import { FilterApplyComponent } from './filter/filter-apply/filter-apply.component';
import { FilterGenreComponent } from './filter/filter-genre/filter-genre.component';
import { IconFilmComponent } from './icons/icon-film/icon-film.component';
import { IconSearchComponent } from './icons/icon-search/icon-search.component';
import { IconAddComponent } from './icons/icon-add/icon-add.component';
import { IconRemoveComponent } from './icons/icon-remove/icon-remove.component';
import { FilterFormComponent } from './filter/filter-form/filter-form.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouritesItemComponent } from './favourites/favourites-item/favourites-item.component';
import { MainListComponent } from './main-list/main-list.component';
import { RecommendedListComponent } from './main-list/recommended-list/recommended-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MovieListComponent,
    MovieItemComponent,
    FilterComponent,
    FilterYearComponent,
    FilterApplyComponent,
    FilterGenreComponent,
    IconFilmComponent,
    IconSearchComponent,
    IconAddComponent,
    IconRemoveComponent,
    FilterFormComponent,
    FavouritesComponent,
    FavouritesItemComponent,
    MainListComponent,
    RecommendedListComponent
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
