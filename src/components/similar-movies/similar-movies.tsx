/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './similar-movies.module.css';

const SimilarMovies = async ({ filmId }: { filmId: number }) => {
	const similarMovies = await filmsApi.getSimilarFilms('en', filmId);

	return (
		<section>
			<h3>Similar movies</h3>
			<p>{filmId}</p>

			{
				similarMovies?.results.map((similar) => {
					return (
						<div key={similar.id}>
							<h4>{similar.title}</h4>
							<p>{similar.poster_path}</p>
						</div>
					)
				})
			}
		</section>
	)
}

export default SimilarMovies;
