import { Component } from '@angular/core';
import { SearchQuery } from 'src/shared/models/searchQuery';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'filter-apply',
  templateUrl: './filter-apply.component.html',
  styleUrls: ['./filter-apply.component.css']
})
export class FilterApplyComponent {
  disabled: boolean = true;
  searchQuery!: SearchQuery;

  constructor(private events: EventService) {
    events.listen('query-filters-updated', (updatedQuery: SearchQuery) => {
      this.searchQuery = updatedQuery;
      this.disabled = this.buttonState(this.searchQuery);
    });
  }

  handleApply() {
    this.events.emit('get-movies');
  }

  buttonState(searchQuery: SearchQuery) {
    let disabled = true;
  
    if (
      searchQuery.title
      || searchQuery.yearList.length
      ||searchQuery.genreList.length 
    ) {
      disabled = false;
    }
  
    return disabled;
  }
}
