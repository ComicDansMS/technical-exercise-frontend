import { Component, Input } from '@angular/core';
import { SearchQuery } from 'src/shared/models/searchQuery';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(
    private events: EventService
  ) {}

  titleInput!: string;

  setTitle(): void {
    this.events.emit('set-title', this.titleInput);
  }

  handleSubmit(): void {
    if (!this.titleInput || this.titleInput === '') return;
    this.events.emit('get-movies');
  }
}
