import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

import ConstructPage from '../../src/components/ConstructPage';
import BackLink from '../../src/components/BackLink';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../src/store';
import { getPostById } from '../../src/store/postSlice';
import get from 'lodash/get';

// styles must mirgate to construct page
export default function MainPage() {
	const dispatch = useAppDispatch();
	const { status, data: post } = useAppSelector(store => store.post);
	const id = get(useRouter(), 'query.id');
	
	useEffect(() => {
		if (id) dispatch(getPostById(id));
	}, [id]);


	const Card = styled.div`
		margin: 0.4rem;
		padding: 0.4rem;
		text-align: left;
		color: inherit;
		text-decoration: none;
		border: 1px solid #eaeaea;
		border-radius: 10px;
		transition: color 0.15s ease, border-color 0.15s ease;
	
	`;

	useEffect(() => {

	}, [])
	
	return (
		<ConstructPage
			headerTitle={`Post`}
			topSide={
				<>
					<div className="flex">
						<BackLink href="/">Posts</BackLink>
					</div>
					<div className="flex" />
				</>
			}
			content={
				status !== 'pending' && post ? (
					<div className="flex flex-1 flex-col mx-8">
						<div className="flex flex-1 mb-2 ml-6 justify-between">
							<div className="flex items-center mr-2"></div>
							<div className="flex mr-8">
								<h1 className="font-normal text-xl"> {post.title} </h1>
							</div>
						</div>
						<div className="flex">
							<h1 className="font-light text-lg"> {post.body} </h1>
						</div>
						{!!post.comments?.length && <div className="flex font-normal text-xl my-3">Comments:</div>}
						<div className="flex flex-col">
							{post.comments?.map(comment => {
								return (
									<div className="flex">
										<Card>{comment.body}</Card>
									</div>
								);
							})}
						</div>
					</div>
				) : (
					'Loading...'
				)
			}
		/>
	);
}

