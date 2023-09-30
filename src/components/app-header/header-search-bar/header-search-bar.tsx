/* styles */
import style from './header-search-bar.module.css';

const HeaderSearchBar = () => {
	return (
		<label className={`${style['header-search-bar']}`}>
			<span className="visually-hidden">search your film here</span>
			<input
				className={`${style['header-search-bar__search-field']}`}
				placeholder="search here"
				type="text"
			/>
		</label>
	);
};

export default HeaderSearchBar;
