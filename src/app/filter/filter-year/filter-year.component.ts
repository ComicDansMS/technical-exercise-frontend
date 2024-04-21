import { Component, Input } from '@angular/core';
import { SearchQuery } from 'src/shared/models/searchQuery';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'filter-year',
  templateUrl: './filter-year.component.html',
  styleUrls: ['./filter-year.component.css']
})
export class FilterYearComponent {
  yearInput!: string;
  yearList!: number[];

  constructor(
    private events: EventService
  ) {
    events.listen('query-filters-updated', (searchQuery: SearchQuery) => this.yearList = searchQuery.yearList);
  }

  addYear(): void {
    if (!this.yearInput || this.yearInput === '') return;
    this.events.emit('set-year', parseInt(this.yearInput));
    this.yearInput = '';
  }

  removeYear(index: number): void {
    this.events.emit('remove-year', index);
  }
}
