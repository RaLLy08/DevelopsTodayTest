import { useRouter } from 'next/dist/client/router';

export default function User() {
	const { query } = useRouter();

	return (
		<div>
			<h1>Post {query.id} id</h1>
		</div>
	);
}
