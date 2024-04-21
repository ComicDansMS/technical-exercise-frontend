import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/shared/models/movie';
import { FavouritesService } from 'src/shared/services/favouritesService';

@Component({
  selector: 'favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  favourites: Movie[] = [];
  private subscription!: Subscription;

  constructor(private favouritesService: FavouritesService) {}

  ngOnInit() {
    this.subscription = this.favouritesService.favourites$.subscribe(updatedFavourites => {
      this.favourites = updatedFavourites;
    });
  }
}
