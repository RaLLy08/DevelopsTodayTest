// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
// import styled from 'styled-components';
// import { useEffect } from 'react';
// import { getPosts } from '../src/store/postsSlice';
// import { useAppDispatch, useAppSelector } from '../src/store';
// import Button from '../src/components/Button';

// const Grid = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	flex-wrap: wrap;
// 	max-width: 800px;
// `;

// const Card = styled.div`
// 	margin: 1rem;
// 	padding: 1.5rem;
// 	text-align: left;
// 	color: inherit;
// 	text-decoration: none;
// 	border: 1px solid #eaeaea;
// 	border-radius: 10px;
// 	transition: color 0.15s ease, border-color 0.15s ease;
// 	width: 90%;
// 	:hover,
// 	:focus,
// 	:active {
// 		color: #0070f3;
// 		border-color: #0070f3;
// 	}
// `;

// const PostsTopSide = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	flex-direction: row;
// 	width: 80%;
// 	margin: 3rem;
// `;

// const Main = styled.div`
// 	padding: 5rem 0;
// 	flex: 1;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// `;

// const Container = styled.div`
// 	/* min-height: 100vh; */
// 	padding: 0 0.5rem;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: center;
// 	align-items: center;
// 	/* height: 100vh; */
// `;

// const Footer = styled.footer`
// 	/* margin-top: 100%; */
// 	width: 100%;
// 	height: 60px;
// 	border-top: 1px solid #eaeaea;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	a {
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		flex-grow: 1;
// 	}
// `;

// const Wrapper = styled.div`
// 	display: flex;
// 	height: 100%;
// 	width: 100%;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: space-between;
// 	position: absolute;
// `;

// export default function MainPage() {
// 	const dispatch = useAppDispatch();
// 	const { status, data: posts } = useAppSelector(store => store.posts);

// 	useEffect(() => {
// 		dispatch(getPosts());
// 	}, []);

// 	return (
// 		<Wrapper>
// 			<Container>
// 				<header>
// 					<title>Create Next App</title>
// 					<meta name="description" content="Generated by create next app" />
// 					<link rel="icon" href="/favicon.ico" />
// 				</header>

// 				<Main>
// 					<h1 className={styles.title}>Welcome to My blog!</h1>
// 					<PostsTopSide>
// 						<div className="flex">
// 							<p className={styles.description}>Latest Posts:</p>
// 						</div>
// 						<div className="flex">
// 							<p className={`${styles.description} mr-3`}>Create</p>
// 							<Button>New Post</Button>
// 						</div>
// 					</PostsTopSide>

// 					<Grid>
// 						<Card>
// 							<h2>Documentation &rarr;</h2>
// 							<p>Find in-depth information about Next.js features and API.</p>
// 						</Card>

// 						<Card>
// 							<h2>Learn &rarr;</h2>
// 							<p>Learn about Next.js in an interactive course with quizzes!</p>
// 						</Card>
// 					</Grid>
// 				</Main>
// 			</Container>
// 			<Footer>
// 				<a
// 					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					Powered by
// 					<span className="font-semibold pl-1 pr-2"> RaLLy08</span>
// 					<Image src="/git.svg" width={20} height={20} />
// 				</a>
// 			</Footer>
// 		</Wrapper>
// 	);
// }

