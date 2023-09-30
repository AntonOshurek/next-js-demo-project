/* components */
import FooterNav from './footer-nav/footer-nav';
import FooterContact from './footer-contact/footer-contact';
/* styles */
import style from './app-footer.module.css';

const AppFooter = () => {
	return (
		<footer className={`${style['app-footer']}`}>
			<div className={`${style['app-footer__wrap']} container`}>
				<FooterNav additionalStyleClass={`${style['app-footer__navigation']}`} />

				<FooterContact additionalStyleClass={`${style['app-footer__contact']}`} />

				<p className={`${style['app-footer__copyright']}`}>© copyright 2023 Exampland Emperor</p>
			</div>
		</footer>
	);
};

export default AppFooter;
