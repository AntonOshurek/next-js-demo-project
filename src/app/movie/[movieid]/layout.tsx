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
