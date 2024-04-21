import { Component } from '@angular/core';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'filter-apply',
  templateUrl: './filter-apply.component.html',
  styleUrls: ['./filter-apply.component.css']
})
export class FilterApplyComponent {
  constructor(
    private events: EventService
  ) {}

  handleApply() {
    this.events.emit('get-movies');
  }
}
