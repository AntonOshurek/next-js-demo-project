/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './style.module.css';

const Movie = async ({ params }: { params: { movieid: string } }) => {
	const currentMovie = await filmsApi.getMovieWithId('eng', +params.movieid);

	return (
		<section>
			<h2>movie</h2>
			<p>{params.movieid}</p>

			<p>
				{currentMovie?.original_title}
			</p>
		</section>
	);
};

export default Movie;
