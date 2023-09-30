'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
/* styles */
import style from './header-nav.module.css';

const AppNav = () => {
	const pathName = usePathname();
	return (
		<nav className={`${style['header-nav']}`}>
			<h2 className="visually-hidden">Page navigation</h2>
			<ul className={`${style['header-nav__list']}`}>
				<li className={`${style['header-nav__item']}`}>
					<Link
						className={`${style['header-nav__link']} ${
							pathName === '/' ? style['header-nav__link--active'] : ''
						}`}
						href="/"
					>
						Films
					</Link>
				</li>
				<li className={`${style['header-nav__item']}`}>
					<a className={`${style['header-nav__link']}`} href="#">
						Serials
					</a>
				</li>
				<li className={`${style['header-nav__item']}`}>
					<a className={`${style['header-nav__link']}`} href="#">
						new
					</a>
				</li>
				<li className={`${style['header-nav__item']}`}>
					<a className={`${style['header-nav__link']}`} href="#">
						timeline
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default AppNav;
