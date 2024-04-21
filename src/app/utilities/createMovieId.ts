import { Movie } from "src/shared/models/movie";

export default function createMovieId(movie: Movie) {
  const handle = movie.title
    .toLowerCase()
    .replace(/[.,']/g, '')
    .replace(/ /g, '-');

  return `${handle}-${movie.year}`;
}