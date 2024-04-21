import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Movie } from "../models/movie";
import { BehaviorSubject, catchError, throwError } from "rxjs";
import { environment } from "src/environment/environment";

@Injectable({
	providedIn: 'root'
})
export class RecommendedService {
	private recommendedSource = new BehaviorSubject<Movie[]>([]);
	recommended$ = this.recommendedSource.asObservable();

	constructor(
		private http: HttpClient
	) { }

	getRecommended(favourites: Movie[]) {
		const options = {
			headers: this.createHeaders(),
		};

		this.http.post<Movie[]>('http://localhost:3000/api/recommended', favourites, options)
			.pipe(
				catchError(this.handleError)
			)
			.subscribe(movies => {
				this.recommendedSource.next(movies);
			});

		return this.recommended$;
	}

	private createHeaders() {
		let headers = new HttpHeaders();
		headers = headers.append('x-api-key', environment.apiKey);
		headers = headers.append('Content-Type', 'application/json');
		return headers
	}

	private handleError(error: HttpErrorResponse) {
		if (error.status === 0) {
			console.error('There is an issue with the client or network: ', error.error);
		} else {
			console.error('Server-side error: ', error.error)
		}

		return throwError(() => new Error('Cannot retrieve favourites from the server. Please try again'));
	}
}