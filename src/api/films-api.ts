import type IcurrentMovie from '@/types/movie/current-movie';
import { ISearchMulti } from '@/types/movie/search';
import type { ISimilarMovies } from '@/types/movie/similar';

class FilmsApi {
	private options;

	constructor() {
		this.options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
			}
		};
	};

	async moviePopular(lang: string, page: number) {
		const requestpath = `${process.env.BASE_URL}popular?api_key=${process.env.API_KEY}`;
		const res = await fetch(requestpath, this.options)
		return res.json();
	};

	async getMovieWithId(lang: string, movieId: number): Promise<IcurrentMovie | null> {
		const requestpath = `${process.env.BASE_URL}${movieId}?language=ru-RU&api_key=${process.env.API_KEY}`;
		const res = await fetch(
			requestpath, this.options)
		return res.json();
	};

	async getSimilarFilms(lang: string, movieId: number): Promise<ISimilarMovies | null> {
		const requestpath = `${process.env.BASE_URL}${movieId}/similar?api_key=${process.env.API_KEY}&language=ru-RU`;
		const res = await fetch(
			requestpath, this.options)
		return res.json();
	};

	async searchMulti(queryString: string): Promise<ISearchMulti | null> {
		const queryOptimizeString = queryString.split(' ').join('+');

		const requestpath = `https://api.themoviedb.org/3/search/movie?query=${queryOptimizeString}&api_key=c42a612fa11183223ab9f9e7502f8363&language=en-EN`;

		const res = await fetch(
			requestpath, this.options)
		return res.json();
	}
};

const filmsApi = new FilmsApi();

export default filmsApi;
