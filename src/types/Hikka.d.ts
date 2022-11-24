declare namespace Hikka {
    type User = {
        username: string;
        avatar: string;
    };

    type Season = 'summer' | 'winter' | 'fall' | 'spring';

    type Release = 'tv' | 'movie' | 'ova' | 'ona' | 'music' | 'special';

    type AgeRating = 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx';

    type Status = 'airing' | 'finished' | 'not_yet';

    type GenreType = 'genre' | 'explicit' | 'theme' | 'demographic';

    type Genre = {
        reference: string;
        original: string;
        name: string;
        slug: string;
        type: GenreType;
        mal_id: number;
        description: string | null;
    };

    type Anime = {
        reference: string;
        title_en: string;
        slug: string;
        title_jp: string;
        status: string;
        source: string;
        title: string;
        release: string;
        rating: string;
        image: string;
        episodes: number;
        year: number;
        scored_by: number;
        score: number;
        season: string;
        producers: string[];
        studios: string[];
        genres: string[];
    };
}
