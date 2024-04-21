import { Component } from '@angular/core';
import { Movie } from 'src/shared/models/movie';
import { RecommendedService } from 'src/shared/services/recommendedService';

@Component({
  selector: 'recommended-list',
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.css']
})
export class RecommendedListComponent {
  movies: Movie[] = [];

  constructor(
    private recommendedService: RecommendedService
  ) {
    this.subscribeToRecommended();
  }

  subscribeToRecommended() {
    this.recommendedService.recommended$.subscribe(recommended => {
      this.movies = recommended;
    })
  }
}
