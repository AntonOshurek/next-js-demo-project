import { Metadata } from 'next';

export const generateMetadata = async ({ params }: { params: { movieid: string } }): Promise<Metadata> => {

	return {
		title: 'search',
		description: 'search',
	};
}

export default function Layout(props: {
	children: React.ReactNode
}) {
	return (
		<div>
			{props.children}
		</div>
	)
}
