import type IMovie from './movie';

export default interface IPopular {
	page: number,
	results: IMovie[],
	total_pages: number,
	total_results: number,
};
