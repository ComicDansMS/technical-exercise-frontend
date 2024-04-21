import { Component } from '@angular/core';
import { EventService } from 'src/shared/services/eventService';
import { FavouritesService } from 'src/shared/services/favouritesService';
import { RecommendedService } from 'src/shared/services/recommendedService';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent {
  showMovies: boolean = false;

  constructor(
    private recommendedService: RecommendedService,
    private favouritesService: FavouritesService,
    private events: EventService
  ) {
    this.events.listen('get-movies', () => this.showMovies = true);
  }

  switchCards(card: string) {
    if (card === 'movies') {
      this.showMovies = true;
    } else {
      this.showMovies = false;
    }
  }

  refreshRecommended() {
    const favourites = this.favouritesService.favourites;
    this.recommendedService.getRecommended(favourites);
  }
}
