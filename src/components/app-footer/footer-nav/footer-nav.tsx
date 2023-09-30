'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
/* styles */
import style from './footer-nav.module.css';

interface IFooterNavProps {
	additionalStyleClass?: string;
}

const FooterNav = ({ additionalStyleClass }: IFooterNavProps) => {
	const pathName = usePathname();

	return (
		<section className={`${style['footer-nav']} ${additionalStyleClass && additionalStyleClass}`}>
			<h5 className={`${style['footer-nav__title']}`}>Sections</h5>

			<ul className={`${style['footer-nav__list']}`}>
				<li className={`${style['footer-nav__item']}`}>
					<Link
						className={`${style['footer-nav__link']} ${
							pathName === '/' ? style['footer-nav__link--active'] : ''
						}`}
						href="/"
					>
						Films
					</Link>
				</li>
				<li className={`${style['footer-nav__item']}`}>
					<a className={`${style['footer-nav__link']}`} href="#">
						Serials
					</a>
				</li>
				<li className={`${style['footer-nav__item']}`}>
					<a className={`${style['footer-nav__link']}`} href="#">
						new
					</a>
				</li>
				<li className={`${style['footer-nav__item']}`}>
					<a className={`${style['footer-nav__link']}`} href="#">
						timeline
					</a>
				</li>
			</ul>
		</section>
	);
};

export default FooterNav;
