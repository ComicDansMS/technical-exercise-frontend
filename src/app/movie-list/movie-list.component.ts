import { Component, Input } from '@angular/core';
import { Movie } from 'src/shared/models/movie';
import { SearchQuery } from 'src/shared/models/searchQuery';
import { EventService } from 'src/shared/services/eventService';
import { MovieService } from 'src/shared/services/movieService';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  searchPerformed: boolean = false;
  searchQuery: SearchQuery = {
    title: null,
    yearList: [],
    genreList: []
  }
  movies: Movie[] = [];

  constructor(private events: EventService, private movieService: MovieService) {
    this.registerEventListeners();
    this.subscribeToMovies();
  }

  registerEventListeners() {
    this.events.listen('set-title', (titleInput: string) => this.searchQuery.title = titleInput);

    this.events.listen('set-year', (yearInput: number) => {
      this.searchQuery.yearList.push(yearInput);
      this.events.emit('query-filters-updated', this.searchQuery);
    });

    this.events.listen('remove-year', (index: number) => {
      this.searchQuery.yearList.splice(index, 1);
      this.events.emit('query-filters-updated', this.searchQuery);
    });

    this.events.listen('set-genre', (genreInput: string) => {
      this.searchQuery.genreList.push(genreInput);
      this.events.emit('query-filters-updated', this.searchQuery);
    });

    this.events.listen('remove-genre', (index: number) => {
      this.searchQuery.genreList.splice(index, 1);
      this.events.emit('query-filters-updated', this.searchQuery);
    });

    this.events.listen('get-movies', () => {
      if (
        this.searchQuery.title === null
        && this.searchQuery.yearList.length === 0
        && this.searchQuery.genreList.length === 0
      ) { return; }
  
      this.getMovies()
    });
  }

  subscribeToMovies() {
    this.movieService.movies$.subscribe(movies => {
      this.movies = movies;
    });
  }

  getMovies() {
    if (
      this.searchQuery.title === null
      && this.searchQuery.yearList.length === 0
      && this.searchQuery.genreList.length === 0
    ) { return; }
    
    this.movieService.getMovies(this.searchQuery);
    this.searchPerformed = true;
  }

  get noMoviesMessage(): string {
    if (this.movies.length === 0) {
      if (this.searchPerformed) {
        return "No movies found";
      } else {
        return "Search for a movie or apply filters";
      }
    } else {
      return "";
    }
  }
}
