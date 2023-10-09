import filmsApi from '@/api/films-api';
import style from './style.module.css';
import Link from 'next/link';

const Search = async ({ params }: { params: { slug: string } }) => {
	let searchFilms = await filmsApi.searchMulti(params.slug);

	const slugs = params.slug.toString().replace(/%2B/g, '+').split(',');

	if (slugs[1]) {
		searchFilms = await filmsApi.searchMulti(slugs[0], +slugs[1]);
	} else {
		searchFilms = await filmsApi.searchMulti(slugs[0]);
	}

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

			<div className={style['pagination']}>
				<ul className={style['pagintaion__list']}>
					{
						searchFilms?.total_pages && Array(searchFilms.total_pages).fill(null).map((_, index) => {
							let activeClass = ''
							if (index + 1 === +slugs[1]) {
								activeClass = style['pagintaion__list-item--active'];
							};

							return (
								<li className={`${style['pagintaion__list-item']} ${activeClass}`} key={index}>
									<Link className={style['pagintaion__list-link']} href={`/search/${slugs[0]}/${index + 1}`}>
										{index + 1}
									</Link>
								</li>
							)
						})
					}

				</ul>
			</div>
		</section>
	)
}

export default Search;
