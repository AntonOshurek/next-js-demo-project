'use client'
import { redirect } from 'next/navigation'
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import filmsApi from '@/api/films-api';
import type { IMovieInSearch } from '@/types/movie/search';
/* styles */
import style from './header-search-bar.module.css';
import Link from 'next/link';

const HeaderSearchBar = () => {
	const [searchText, setSearchText] = useState<string>('');
	const [searchResult, setSearchResult] = useState<IMovieInSearch[] | null>(null);
	const [redyForRedirect, setRedyForRedirect] = useState<boolean>(false);

	const searchInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		setSearchText(evt.target.value);
	};

	const onSearchKeydownHandler = (evt: KeyboardEvent<HTMLInputElement>) => {
		if (evt.key === "Enter") {
			setRedyForRedirect(true)
		};
	};

	const linkHandler = () => {
		setSearchResult(null);
	}

	const optimyzeSearchString = (str: string): string => {
		const queryOptimizeString = str.split(' ').join('+');
		return queryOptimizeString;
	}

	useEffect(() => {
		if (redyForRedirect) {
			redirect(`/search/${optimyzeSearchString(searchText)}`);
		}
	}, [redyForRedirect]);

	useEffect(() => {
		if (searchText.length > 0) {
			filmsApi.searchMulti(optimyzeSearchString(searchText))
				.then((res) => {
					if (res?.results) {
						setSearchResult(res.results);
					} else {
						setSearchResult(null);
					}
				})
				.catch((err) => {
					console.log(err)
				})
		} else {
			setSearchResult(null);
		}
	}, [searchText]);

	return (
		<div className={`${style['header-search-bar']}`}>
			<label className={`${style['header-search-bar__label']}`}>
				<span className="visually-hidden">search your film here</span>
				<input
					onKeyDown={onSearchKeydownHandler}
					onChange={searchInputHandler}
					value={searchText}
					className={`${style['header-search-bar__search-field']}`}
					placeholder="search here"
					type="text"
				/>
			</label>

			{
				searchResult && <ul className={`${style['header-search-bar__search-list']}`}>

					{
						searchResult.length > 0 ? searchResult.map((item, i) => {
							if (i < 4) {
								return (
									<li className={`${style['header-search-bar__search-list-item']}`} key={item.id}>
										<Link className={`${style['header-search-bar__search-list-link']}`} href={`/movie/${item.id}`}
											onClick={linkHandler}>
											{item.title}
										</Link>
									</li>
								)
							}
							return null;
						}) : <p className={`${style['header-search-bar__search-without-result']}`}>Ничего не найдено :(</p>
					}
				</ul>
			}
		</div>
	);
};

export default HeaderSearchBar;
