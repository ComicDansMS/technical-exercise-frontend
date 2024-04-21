import { Component } from '@angular/core';
import { EventService } from 'src/shared/services/eventService';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  disabled: boolean = true;
  titleInput!: string;

  constructor(private events: EventService) {}

  setTitle(): void {
    this.events.emit('set-title', this.titleInput);

    if (this.titleInput.length) {
      this.disabled = false;
    } else {
      this.disabled = true
    }
  }

  handleSubmit(): void {
    if (!this.titleInput || this.titleInput === '') return;
    this.events.emit('get-movies');
  }
}
