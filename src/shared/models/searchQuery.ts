export class SearchQuery {
    constructor(
        public title: string | null = null,
        public year: number | null = null,
        public genre: string | null = null,
    ) {}
}