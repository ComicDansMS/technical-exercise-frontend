import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Movie } from "../models/movie";
import { BehaviorSubject, catchError, throwError } from "rxjs";
import { SearchQuery } from "../models/searchQuery";
import { environment } from "src/environment/environment";

@Injectable({
	providedIn: 'root'
})
export class MovieService {
	private moviesSource = new BehaviorSubject<Movie[]>([]);
	movies$ = this.moviesSource.asObservable();

	constructor(
		private http: HttpClient
	) { }

	getMovies(query: SearchQuery) {
		const options = {
			headers: this.createHeaders(),
			params: this.createParams(query),
		};

		this.http.get<Movie[]>('http://localhost:3000/api/movies', options)
			.pipe(
				catchError(this.handleError)
			)
			.subscribe(movies => {
				this.moviesSource.next(movies);
			});

		return this.movies$;
	}

	private createParams(query: SearchQuery) {
		let params = new HttpParams();

		if (query.title) {
			params = params.append('title', query.title);
		}

		if (query.yearList) {
			params = params.append('year', JSON.stringify(query.yearList));
		}

		if (query.genreList) {
			params = params.append('genre', JSON.stringify(query.genreList));
		}

		params = params.append('limit', 1000);

		return params;
	}

	private createHeaders() {
		let headers = new HttpHeaders();
		headers = headers.append('x-api-key', environment.apiKey);
		return headers
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			console.error('There is an issue with the client or network: ', error.error);
		} else {
			console.error('Server-side error: ', error.error)
		}

		return throwError(() => new Error('Cannot retrieve movies from the server. Please try again'));
	}
}