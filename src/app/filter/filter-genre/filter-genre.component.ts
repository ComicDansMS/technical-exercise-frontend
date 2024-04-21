import { Component } from '@angular/core';
import { SearchQuery } from 'src/shared/models/searchQuery';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'filter-genre',
  templateUrl: './filter-genre.component.html',
  styleUrls: ['./filter-genre.component.css']
})
export class FilterGenreComponent {
  genreInput!: string;
  genreList!: string[];

  constructor(
    private events: EventService
  ) {
    events.listen('query-filters-updated', (searchQuery: SearchQuery) => this.genreList = searchQuery.genreList);
  }

  addGenre(): void {
    if (!this.genreInput || this.genreInput === '') return;
    this.events.emit('set-genre', this.genreInput);
    this.genreInput = '';
  }

  removeGenre(index: number): void {
    this.events.emit('remove-genre', index);
  }
}
