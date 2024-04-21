import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import createMovieId from 'src/app/utilities/createMovieId';
import { Movie } from 'src/shared/models/movie';
import { FavouritesService } from 'src/shared/services/favouritesService';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() isFirst!: boolean;
  isFavourite!: boolean;
  private subscription!: Subscription;

  constructor(
    private favouritesService: FavouritesService
  ){}

  ngOnInit() {
    this.subscription = this.favouritesService.favourites$.subscribe(favourites => {
      this.checkForFavourite(favourites)
    });
  }

  toggleFavourite() {
    if (this.isFavourite) {
      this.favouritesService.removeFavourite(this.movie);
    } else {
      this.favouritesService.addFavourite(this.movie);
    }
  }

  checkForFavourite(favourites: Movie[]) {
    this.isFavourite = favourites.some(favourite => {
      const favouriteId = createMovieId(favourite);
      const movieId = createMovieId(this.movie);

      return favouriteId === movieId;
    })
  }
}
