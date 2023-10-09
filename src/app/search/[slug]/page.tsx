import filmsApi from '@/api/films-api';
import style from './style.module.css';
import Link from 'next/link';

const Search = async ({ params }: { params: { slug: string } }) => {
	const searchFilms = await filmsApi.searchMulti(params.slug);

	return (
		<section className={`${style['search']} container`}>
			<h2>search</h2>

			<ul className={style['search__list']}>
				{
					searchFilms?.results.map((movie) => {
						return (
							<li className={style['popular-films__item']} key={movie.id}>
								<div className={style['popular-films__item-info']}>
									<h3 className={style['popular-films__item-title']}>{movie.title}</h3>
								</div>
								<img className={style['popular-films__item-poster']} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={200} height={200} alt="" />
								<Link className={style['popular-films__litem-link']} href={`/movie/${movie.id}`}>
									<span className='visually-hidden'>link to ${movie.original_title} movie</span>
								</Link>
							</li>
						)
					})
				}
			</ul>
		</section>
	)
}

export default Search;
