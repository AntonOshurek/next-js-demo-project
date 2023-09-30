/* API */
import filmsApi from '@/api/films-api';
/* STYLES */
import style from './style.module.css';
/* TYPES */
import type IPopular from '@/types/movie/popular';

const PopularFilms = async () => {
    const popularFilms: IPopular = await filmsApi.moviePopular('eng', 1);

    return (
        <section className={style['popular-films']}>
            <div className={style['popular-films__wrap']}>
                <h2 className={style['popular-films__title']}>Popular movies</h2>


                <div className={style['popular-films__slider']}>
                    <ul className={style['popular-films__list']}>
                        {
                            popularFilms.results.map((movie) => {
                                return (
                                    <li className={style['popular-films__item']}>
                                        <h3 className={style['popular-films__item-title']}>{movie.title}</h3>
                                        {/* <p className={style['popular-films__item-overvie']}>{movie.overview}</p> */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default PopularFilms;
