import { SearchQuery } from "src/shared/models/searchQuery";

export default function buttonState(searchQuery: SearchQuery) {
  let disabled = true;

  if (
    searchQuery.title
    || searchQuery.yearList.length
    ||searchQuery.genreList.length 
  ) {
    disabled = false;
  }

  return disabled;
}