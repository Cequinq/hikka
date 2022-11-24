import axios from 'axios';
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
    host: 'https://search.hikka.io',
    headers: {
        Authorization: 'Bearer 3d4376c8e728f4961890904c836a5607f6e45bc2382b598e99677d9d3bc1a7c8',
    },
});

interface Params {
    season?: string;
    year?: string;
    score?: string;
    query?: string;
    page?: number;
    producers?: string;
    studios?: string;
    release?: string;
    genres?: string;
    rating?: string;
    source?: string;
    status?: string;
    sort?: 'score:desc' | 'score:asc' | 'scored_by:desc' | 'scored_by:asc' | 'year:desc' | 'year:asc';
}

export default async function (params: Params) {
    try {
        const index = client.index('anime');

        return await index.search<Hikka.Anime>(params.query, {
            offset: params.page ? (params.page - 1) * 20 : 0,
            sort: params.sort ? [params.sort] : ['score:desc'],
            filter: [
                params.year && params.year !== ''
                    ? `year >= ${params.year.split(',')[0]} AND year <= ${params.year.split(',')[1]}`
                    : '',
                params.score && params.score !== ''
                    ? `score >= ${params.score.split(',')[0]} AND score <= ${params.score.split(',')[1]}`
                    : '',
                params.genres && params.genres !== '' ? params.genres.split(',').map((f) => `genres = ${f}`) : '',
                params.status && params.status !== '' ? params.status.split(',').map((f) => `status = ${f}`) : '',
                params.release && params.release !== '' ? params.release.split(',').map((f) => `release = ${f}`) : '',
                params.season && params.season !== '' ? params.season.split(',').map((f) => `season = ${f}`) : '',
                params.rating && params.rating !== '' ? params.rating.split(',').map((f) => `rating = ${f}`) : '',
                params.producers && params.producers !== ''
                    ? params.producers.split(',').map((f) => `producers = ${f}`)
                    : '',
                params.studios && params.studios !== '' ? params.studios.split(',').map((f) => `studios = ${f}`) : '',
                params.source && params.source !== '' ? params.source.split(',').map((f) => `source = ${f}`) : '',
            ],
        });
    } catch (e) {
        if (axios.isAxiosError(e)) {
            if (e.response?.data) {
                throw e.response?.data.error;
            } else {
                throw e;
            }
        } else {
            console.error('unexpected error: ', e);

            throw e;
        }
    }
}
