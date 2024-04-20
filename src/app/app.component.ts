import { Component } from '@angular/core';
import { Movie } from 'src/shared/models/movie';
import { SearchQuery } from 'src/shared/models/searchQuery';
import { EventService } from 'src/shared/services/eventService';
import { MovieService } from 'src/shared/services/movieService';
import movieData from 'temp/movieData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchPerformed: boolean = false;
  // movies: Movie[] = [];
  movies: Movie[] = movieData;

  constructor(events: EventService, private movieService: MovieService) {
    events.listen('get-movies', (query: SearchQuery) => this.getMovies(query));
  }

  getMovies(query: SearchQuery) {
    this.movieService.getMovies(query).subscribe(
      (data: Movie[]) => {
        this.movies = data;
        this.searchPerformed = true;
        console.log({data});
      },
      (error: any) => {
        // TODO: handle error properly
        console.error('Error getting movies: ', error.message)
      }
    )
  }
}
