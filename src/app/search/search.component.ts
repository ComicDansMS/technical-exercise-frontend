import { Component } from '@angular/core';
import { EventService } from 'src/shared/services/eventService';
import { MovieService } from 'src/shared/services/movieService';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  disabled: boolean = true;
  titleInput!: string;
  movieCount!: number;
  limited!: boolean;

  constructor(
    private events: EventService,
    private movieService: MovieService
  ) {
    this.subscribeToMovies();
  }

  subscribeToMovies() {
    this.movieService.movies$.subscribe(movies => {
      this.movieCount = movies.length;
      if (this.movieCount === 1000) {
        this.limited = true;
      } else {
        this.limited = false;
      }
    });
  }

  setTitle(): void {
    this.events.emit('set-title', this.titleInput);

    if (this.titleInput.length) {
      this.disabled = false;
    } else {
      this.disabled = true
    }
  }

  handleSubmit(): void {
    if (!this.titleInput || this.titleInput === '') return;
    this.events.emit('get-movies');
  }
}
