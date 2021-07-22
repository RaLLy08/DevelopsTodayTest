import styled from 'styled-components';
import { memo, useEffect } from 'react';
import Link from 'next/link';

import { getPosts } from '../src/store/postsSlice';
import { useAppDispatch, useAppSelector } from '../src/store';
import ConstructPage from '../src/components/ConstructPage';
import LinkButton from '../src/components/LinkButton';
import AnimateText from '../src/components/AnimateText';


const SeeMore = styled.div`
	display: none;
`;

const Card = styled.div`
	margin: 0.6rem;
	padding: 1.2rem;
	text-align: left;
	color: inherit;
	text-decoration: none;
	border: 1px solid #eaeaea;
	border-radius: 10px;
	transition: color 0.15s ease, border-color 0.15s ease;
	width: 90%;
	:hover,
	:focus,
	:active {
		color: #0070f3;
		border-color: #0070f3;
	}
	:hover ${SeeMore} {
		display: flex;
	};
	cursor: pointer;
`;

type Post = {
	title: string,
	body: string,
	id: number
}
// styles must mirgate to construct page
export default function Posts() {
  const dispatch = useAppDispatch();
  const { status, data: posts } = useAppSelector(store => store.posts);
  
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
		<ConstructPage
			headerTitle={<AnimateText text="Welcome to My blog!" />}
			topSide={
				<>
					<div className="flex">
						<p >Latest Posts:</p>
					</div>
					<div className="flex">
						<p className={'mr-3'}>Create</p>

						<LinkButton href="/posts/new">New Post</LinkButton>
					</div>
				</>
			}
			content={
				status !== 'pending' ? (
					<>
						{[...posts].reverse().map(post => {
							return (
								<Link href={`/posts/${post.id}`}>
									<Card key={post.id}>
										<div className="flex flex-row">
											<div className="flex flex-col">
												<div className="flex">
													<h1 className="font-semibold mb-2">{post.title} </h1>
												</div>
												<div className="flex">
													<p>{post.body}</p>
												</div>
											</div>
											<SeeMore className="flex flex-1 justify-end">
												<div>See more &rarr;</div>
											</SeeMore>
										</div>			
									</Card>
								</Link>
							);
						})}
					</>
				) : (
					'Loading...'
				)
			}
		/>
  );
}


