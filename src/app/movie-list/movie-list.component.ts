import { Component, Input } from '@angular/core';
import { Movie } from 'src/shared/models/movie';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  @Input() movies: Movie[] = [];
  @Input() searchPerformed: boolean = false;

  get noMoviesMessage(): string {
    if (this.movies.length === 0) {
      if (this.searchPerformed) {
        return "No movies found. Try a different search!";
      } else {
        return "Search for a movie or apply filters";
      }
    } else {
      return "";
    }
  }
}
