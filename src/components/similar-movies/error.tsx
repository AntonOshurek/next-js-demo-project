'use client'

const Error = ({ error }: { error: Error }) => {
	return (
		<div>
			{JSON.stringify(error)}
		</div>
	)
}

export default Error;
