import { Component } from '@angular/core';
import { Movie } from 'src/shared/models/movie';
import { EventService } from 'src/shared/services/eventService';
import { RecommendedService } from 'src/shared/services/recommendedService';
import favouriteData from 'temp/favouriteData';

@Component({
  selector: 'recommended-list',
  templateUrl: './recommended-list.component.html',
  styleUrls: ['./recommended-list.component.css']
})
export class RecommendedListComponent {
  movies: Movie[] = [];
}
