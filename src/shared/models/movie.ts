export class Movie {
    constructor(
        public title: string,
        public year: number,
        public genres: string[],
        public cast?: string[],
        public href?: string,
        public extract?: string,
        public thumbnail?: string,
        public thumbnail_width?: number,
        public thumbnail_height?: number
    ) {}
}