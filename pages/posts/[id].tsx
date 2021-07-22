import { useRouter } from 'next/dist/client/router';
import { ChangeEvent, useEffect, useState } from 'react';

import ConstructPage from '../../src/components/ConstructPage';
import BackLink from '../../src/components/BackLink';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../src/store';
import { createComment, getPostById } from '../../src/store/postSlice';
import get from 'lodash/get';
import ResizebleTextarea from '../../src/components/ResizebleTextarea';
import Button from '../../src/components/Button';

// styles must mirgate to construct page


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

export default function Post() {
	const dispatch = useAppDispatch();
	const { status, data: post } = useAppSelector(store => store.post);
	const router = useRouter();
	const id = get(router, 'query.id');
	
	const [comment, setComment] = useState<string>('');
	const [err, setErr] = useState<boolean>(false);
	
	useEffect(() => {
		if (id) dispatch(getPostById(id));
	}, [id]);


	const handleChangeComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
		
		if (err) setErr(false);
	};	

	const handleCommentClick = (e: ChangeEvent<HTMLButtonElement>) => {
		const isEmpty = !comment.trim();
		
		if (isEmpty) {
			setErr(true);
		} else {
			dispatch(
				createComment({
					body: comment,
					postId: +id,
				})
			)
		}
	};	

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
				post ? (
					<div className="flex flex-1 flex-col mx-8">
						<div className="flex flex-1 mb-2 ml-6 justify-center">
							<div className="flex mr-8">
								<h1 className="font-normal text-xl"> {post.title} </h1>
							</div>
						</div>

						<div className="flex mx-2">
							<h1 className="font-light text-lg"> {post.body} </h1>
						</div>
						{status !== 'pending' ? (
							<>
								{!!post.comments?.length && (
									<div className="flex font-normal text-xl my-3">Comments:</div>
								)}
								<div className="flex flex-col">
									{post.comments?.map(comment => {
										return (
											<div key={comment.id} className="flex">
												<Card>{comment.body}</Card>
											</div>
										);
									})}
								</div>
							</>
						) : (
							<div className="flex flex-1 justify-center">Loading...</div>
						)}

						<div className="flex flex-col mt-8">
							<div className="flex">
								<ResizebleTextarea error={err} value={comment} onChange={handleChangeComment} />
							</div>
							<div className="flex flex-1 justify-end">
								<div className="flex mr-4">
									<Button onClick={handleCommentClick}>Comment</Button>
								</div>
							</div>
						</div>
					</div>
				) : (
					'Loading...'
				)
			}
		/>
	);
}
