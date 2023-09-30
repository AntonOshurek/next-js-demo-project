/* components */
import { LoginBtn } from '../';
import AppNav from './header-nav/header-nav';
import HeaderSearchBar from './header-search-bar/header-search-bar';
/* styles */
import style from './app-header.module.css';

const AppHeader = () => {
	return (
		<header className={`${style['app-header']} container`}>
			<h1 className={`${style['app-header__title']}`}>Top Films App</h1>

			<AppNav />

			<HeaderSearchBar />

			<LoginBtn />
		</header>
	);
};

export default AppHeader;
