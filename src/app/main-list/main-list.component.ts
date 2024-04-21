import { Component } from '@angular/core';
import { EventService } from 'src/shared/services/eventService';
import { RecommendedService } from 'src/shared/services/recommendedService';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent {
  showMovies: boolean = true;

  constructor(
    private recommendedService: RecommendedService,
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
    
  }
}
