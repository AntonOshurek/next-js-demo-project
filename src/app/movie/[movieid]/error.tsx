'use client'

const Error = ({ error }: { error: Error }) => {
	return (
		<div>
			ERROR...
			{JSON.stringify(error)}
		</div>
	)
}

export default Error;
