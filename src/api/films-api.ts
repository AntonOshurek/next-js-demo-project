import type IcurrentMovie from '@/types/movie/current-movie';
import type { ISimilarMovies } from '@/types/movie/similar';

class FilmsApi {

	constructor() {

	};

	async moviePopular(lang: string, page: number) {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
			}
		};

		const requestpath = `${process.env.BASE_URL}popular?api_key=${process.env.API_KEY}`;

		const res = await fetch(requestpath, options)
		return res.json();
	};

	async getMovieWithId(lang: string, movieId: number): Promise<IcurrentMovie | null> {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
			}
		};

		const requestpath = `${process.env.BASE_URL}${movieId}?language=ru-RU&api_key=${process.env.API_KEY}`;

		const res = await fetch(
			requestpath, options)
		return res.json();
	};

	async getSimilarFilms(lang: string, movieId: number): Promise<ISimilarMovies | null> {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
			}
		};

		const requestpath = `${process.env.BASE_URL}${movieId}/similar?api_key=${process.env.API_KEY}&language=ru-RU`;
		const res = await fetch(
			requestpath, options)
		return res.json();
	};
};

const filmsApi = new FilmsApi();

export default filmsApi;
