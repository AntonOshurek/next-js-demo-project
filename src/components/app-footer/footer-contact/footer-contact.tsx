/* styles */
import style from './footer-contact.module.css';

interface IFooterContactProps {
	additionalStyleClass?: string;
}

const FooterContact = ({ additionalStyleClass }: IFooterContactProps) => {
	return (
		<section
			className={`${style['footer-contact']} ${additionalStyleClass && additionalStyleClass}`}
		>
			<h5 className="visually-hidden">Contact information</h5>
			<a className={`${style['footer-contact__link']}`} href="mailto: abc@example.com">
				abc@example.com
			</a>
			<a className={`${style['footer-contact__link']}`} href="tel:+48*********">
				+48 *** *** ***
			</a>
		</section>
	);
};

export default FooterContact;
