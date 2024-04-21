export class SearchQuery {
    constructor(
        public title: string | null = null,
        public yearList: number[],
        public genreList: string[],
    ) {}
}