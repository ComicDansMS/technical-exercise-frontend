import { Component } from '@angular/core';
import { Movie } from 'src/shared/models/movie';
import { SearchQuery } from 'src/shared/models/searchQuery';
import { EventService } from 'src/shared/services/eventService';
import { MovieService } from 'src/shared/services/movieService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchPerformed: boolean = false;
  searchQuery: SearchQuery = {
    title: null,
    yearList: [],
    genreList: []
  }
  movies: Movie[] = [];

  constructor(events: EventService, private movieService: MovieService) {
    events.listen('set-title', (titleInput: string) => this.searchQuery.title = titleInput);

    events.listen('set-year', (yearInput: number) => {
      this.searchQuery.yearList.push(yearInput);
      events.emit('query-filters-updated', this.searchQuery);
    });

    events.listen('remove-year', (index: number) => {
      this.searchQuery.yearList.splice(index, 1);
      events.emit('query-filters-updated', this.searchQuery);
    });

    events.listen('set-genre', (genreInput: string) => {
      this.searchQuery.genreList.push(genreInput);
      events.emit('query-filters-updated', this.searchQuery);
    });

    events.listen('remove-genre', (index: number) => {
      this.searchQuery.genreList.splice(index, 1);
      events.emit('query-filters-updated', this.searchQuery);
    });

    events.listen('get-movies', () => {
      if (
        this.searchQuery.title === null
        && this.searchQuery.yearList.length === 0
        && this.searchQuery.genreList.length === 0
      ) { return; }

      this.getMovies(this.searchQuery)
    });
  }

  getMovies(query: SearchQuery) {
    this.movieService.getMovies(query).subscribe(
      (data: Movie[]) => {
        this.movies = data;
        this.searchPerformed = true;
      },
      (error: any) => {
        console.error('Error getting movies: ', error.message)
      }
    )
  }
}
