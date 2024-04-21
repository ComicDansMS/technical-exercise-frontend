import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventService } from 'src/shared/services/eventService';
import { MovieService } from 'src/shared/services/movieService';
import { RecommendedService } from 'src/shared/services/recommendedService';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  showMovies: boolean = true;
  recommendedCount!: number;
  movieCount!: number;
  private subscription!: Subscription;

  constructor(
    private recommendedService: RecommendedService,
    private movieService: MovieService,
    private events: EventService
  ) {
    this.events.listen('get-movies', () => this.showMovies = true);
  }

  ngOnInit() {
    this.subscription = this.recommendedService.recommended$.subscribe(recommended => {
      this.recommendedCount = recommended.length;
    });

    this.subscription = this.movieService.movies$.subscribe(movies => {
      this.movieCount = movies.length;
    });
  }

  switchCards(card: string) {
    if (card === 'movies') {
      this.showMovies = true;
    } else {
      this.showMovies = false;
    }
  }
}
