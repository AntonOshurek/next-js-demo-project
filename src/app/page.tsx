/* COMPONENTS */
import { PopularFilms } from "@/components"
/* STYLES */
import style from './styles/styles.module.css';

export default function Home() {
	return (
		<div className={style['app']}>
			<PopularFilms />
		</div>
	)
}
