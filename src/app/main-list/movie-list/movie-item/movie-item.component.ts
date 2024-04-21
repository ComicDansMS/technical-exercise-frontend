import { Component, Input } from '@angular/core';
import { Movie } from 'src/shared/models/movie';
import { FavouritesService } from 'src/shared/services/favouritesService';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Input() isFirst!: boolean;

  constructor(
    private favouritesService: FavouritesService
  ){}

  addFavourite() {
    this.favouritesService.addFavourite(this.movie);
  }
}
