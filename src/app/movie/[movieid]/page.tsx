import Image from 'next/image';
/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './style.module.css';

const Movie = async ({ params }: { params: { movieid: string } }) => {
	const currentMovie = await filmsApi.getMovieWithId('eng', +params.movieid);

	return (
		<section className={style['movie']}>
			<div className={`${style['movie__wrap']} container`}>
				<Image
					className={style['movie__poster-backdrop']}
					src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`}
					width={500}
					height={300}
					alt=""
				/>
				<p>{+params.movieid}</p>
				<h2 className={style['movie__title']}>{currentMovie?.title}</h2>
				<h3>
					{currentMovie?.original_title}
				</h3>

				<Image
					className={style['movie__poster']}
					src={`https://image.tmdb.org/t/p/original${currentMovie?.poster_path}`}
					width={500}
					height={300}
					alt=""
				/>
			</div>
		</section>
	);
};

export default Movie;
