import Image from 'next/image';
/* API */
import filmsApi from '@/api/films-api';
/* COMPONENTS */
import SimilarMovies from '@/components/similar-movies/similar-movies';
/* STYLES */
import style from './style.module.css';

const Movie = async ({ params }: { params: { movieid: string } }) => {
	const currentMovie = await filmsApi.getMovieWithId('eng', +params.movieid);

	return (
		<section className={style['movie']}>
			<div className={`${style['movie__wrap']} container`}>
				<div className={`${style['movie__banner']}`}>
					<Image
						className={style['movie__poster-backdrop']}
						src={`https://image.tmdb.org/t/p/original${currentMovie?.backdrop_path}`}
						width={500}
						height={300}
						alt=""
					/>
				</div>

				<div className={`${style['movie__info-block']}`}>
					<div className={`${style['movie__info']}`}>
						<h2 className={style['movie__title']}>{currentMovie?.title}</h2>
						<h3>
							{currentMovie?.original_title}
						</h3>

						<p>
							overview:
							{currentMovie?.overview}
						</p>
					</div>

					<Image
						className={style['movie__poster']}
						src={`https://image.tmdb.org/t/p/original${currentMovie?.poster_path}`}
						width={300}
						height={460}
						alt=""
					/>
				</div>
			</div>

			<SimilarMovies filmId={+params.movieid} />
		</section>
	);
};

export default Movie;
