import { Component } from '@angular/core';
import { Movie } from 'src/shared/models/movie';
import { EventService } from 'src/shared/services/eventService';
import favouriteData from 'temp/favouriteData';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {
  // favourites: Movie[] = [];
  favourites: Movie[] = favouriteData;

  constructor(events: EventService) {
    events.listen('remove-favourite', (index: number) => {
      this.favourites.splice(index, 1);
    });
  }
}
