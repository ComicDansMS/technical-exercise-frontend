import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent {
  showMovies: boolean = true;

  switchCards(card: string) {
    if (card === 'movies') {
      this.showMovies = true;
    } else {
      this.showMovies = false;
    }
  }
}
