import { API } from "@/variables/api";
import type IcurrentMovie from '@/types/movie/current-movie';

class FilmsApi {

	constructor() {

	};

	async moviePopular(lang: string, page: number) {
		const options = {
			method: 'GET',
		};

		const res = await fetch(API.movie.popular, options)
		return res.json();
	};

	async getMovieWithId(lang: string, movieId: number): Promise<IcurrentMovie | null> {
		const options = {
			method: 'GET',
		};
		console.log('run')

		const requestpath = `${API.movie.current}&movie_id=${movieId}`;
		console.log(requestpath)

		const res = await fetch(requestpath, options)
		return res.json();
	};
};

const filmsApi = new FilmsApi();

export default filmsApi;
