import filmsApi from '@/api/films-api';
import { Metadata } from 'next';

export const generateMetadata = async ({ params }: { params: { movieid: string } }): Promise<Metadata> => {
	const currentMovie = await filmsApi.getMovieWithId('eng', +params.movieid);
	console.log('get data for layout')
	return {
		title: currentMovie?.original_title,
		description: 'test',
	};
}

export default function Layout(props: {
	children: React.ReactNode
	similar: React.ReactNode
}) {
	return (
		<div>
			{props.children}
			{props.similar}
		</div>
	)
}
