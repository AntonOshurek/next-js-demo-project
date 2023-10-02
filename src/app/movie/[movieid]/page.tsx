/* STYLES */
import style from './style.module.css';

const Movie = ({ params }: { params: { movieid: string } }) => {
	return (
		<section>
			<h2>movie</h2>
			<p>{params.movieid}</p>
		</section>
	);
};

export default Movie;
