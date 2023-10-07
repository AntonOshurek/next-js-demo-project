'use client'
import { ChangeEvent, useEffect, useState } from 'react';
import filmsApi from '@/api/films-api';
import type { ISearchMulti } from '@/types/movie/search';
/* styles */
import style from './header-search-bar.module.css';
import Link from 'next/link';

const HeaderSearchBar = () => {
	const [searchText, setSearchText] = useState<string>('');
	const [searchResult, setSearchResult] = useState<ISearchMulti | null>(null);

	const searchInputHandler = (evt: ChangeEvent<HTMLInputElement>) => {
		setSearchText(evt.target.value);
	};

	useEffect(() => {
		if (searchText.length > 0) {
			filmsApi.searchMulti(searchText)
				.then((res) => {
					setSearchResult(res);
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}, [searchText]);

	return (
		<div className={`${style['header-search-bar']}`}>
			<label className={`${style['header-search-bar__label']}`}>
				<span className="visually-hidden">search your film here</span>
				<input
					onChange={searchInputHandler}
					value={searchText}
					className={`${style['header-search-bar__search-field']}`}
					placeholder="search here"
					type="text"
				/>
			</label>

			{
				searchResult && <ul className={`${style['header-search-bar__search-list']}`}>
					{searchResult.results.map((item, i) => {
						if (i < 4) {
							return (
								<li className={`${style['header-search-bar__search-list-item']}`} key={item.id}>
									<Link className={`${style['header-search-bar__search-list-link']}`} href={`/movie/${item.id}`}>
										{item.title}
									</Link>
								</li>
							)
						}
						return null;
					})}
				</ul>
			}
		</div>
	);
};

export default HeaderSearchBar;
