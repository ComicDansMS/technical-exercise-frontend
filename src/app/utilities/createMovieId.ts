import { Movie } from "src/shared/models/movie";

export default function createMovieId(movie: Movie) {
  const title = movie.title.toLowerCase().replace(/ /g,'-');
  return `${title}-${movie.year}`;
}