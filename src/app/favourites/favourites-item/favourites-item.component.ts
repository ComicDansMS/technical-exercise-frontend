import { Component, Input } from '@angular/core';
import { Movie } from 'src/shared/models/movie';
import { EventService } from 'src/shared/services/eventService';
import { FavouritesService } from 'src/shared/services/favouritesService';

@Component({
  selector: 'favourites-item',
  templateUrl: './favourites-item.component.html',
  styleUrls: ['./favourites-item.component.css']
})
export class FavouritesItemComponent {
  @Input() movie!: Movie;
  @Input() index!: number;

  constructor(
    private events: EventService,
    private favouritesService: FavouritesService
  ) {}

  removeFavourite() {
    this.favouritesService.removeFavourite(this.movie);
  }
}
