import { Injectable } from "@angular/core";
import { Movie } from "../models/movie";
import { BehaviorSubject } from "rxjs";
import createMovieId from "src/app/utilities/createMovieId";
import favouriteData from "temp/favouriteData";

@Injectable({
	providedIn: 'root'
})
export class FavouritesService {
	// private favouritesSource = new BehaviorSubject<Movie[]>([]);
	private favouritesSource = new BehaviorSubject<Movie[]>(favouriteData as Movie[]); // Load movieData on app load for dev
	favourites$ = this.favouritesSource.asObservable();

	addFavourite(movie: Movie) {
		const currentFavourites = this.favouritesSource.getValue();
		const isDuplicate = currentFavourites.some(current => this.movieMatch(current, movie));

		if (!isDuplicate) {
			this.favouritesSource.next([...currentFavourites, movie]);
		}
	}

  removeFavourite(movie: Movie) {
    const currentFavourites = this.favouritesSource.getValue();
    this.favouritesSource.next(currentFavourites.filter(current => !this.movieMatch(current, movie)));
  }

	movieMatch(movieA: Movie, movieB: Movie) {
		return createMovieId(movieA) === createMovieId(movieB);
	}

	get favourites(): Movie[] {
		return this.favouritesSource.getValue();
	}
}