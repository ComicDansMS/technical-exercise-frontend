import { Component } from '@angular/core';
import { SearchQuery } from 'src/shared/models/searchQuery';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  constructor(
    private events: EventService
  ) {}

  searchQuery: SearchQuery = {
    title: null,
    year: null,
    genre: null
  }

  handleSubmit(): void {
    if (!this.searchQuery.title || this.searchQuery.title === '') return;
    
    this.events.emit('get-movies', this.searchQuery)
    this.searchQuery.title = '';
  }
}
