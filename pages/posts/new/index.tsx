import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';

import ConstructPage from '../../../src/components/ConstructPage';
import ResizebleTextarea from '../../../src/components/ResizebleTextarea';
import BackLink from '../../../src/components/BackLink';
import Button from '../../../src/components/Button';
import _ from '../../../@lodash';
import { useAppDispatch } from '../../../src/store';
import { createPost } from '../../../src/store/postSlice';

type PostForm = {
	title: string;
	body: string;
};

type PostFormErrs = {
	title: boolean;
	body: boolean;
};
// styles must mirgate to construct page
export default function newPostPage() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	// const { status, data: posts } = useAppSelector(store => store.posts);
	const [form, setForm] = useState<PostForm>({
		title: '',
		body: ''
	});

	const [errs, setErrs] = useState<PostFormErrs>({
		title: false,
		body: false
	});

	const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>, path: string) => {
		const isErrField = _.get(errs, path);

		setForm(prev => {
			return _.set({ ...prev }, path, e.target.value);
		});

		if (isErrField) {
			setErrs(prev => {
				return _.set({ ...prev }, path, false);
			});
		}
	};

	const handleCreateClick = (e: React.MouseEvent<HTMLElement>) => {
		const emptyFields: Array<string> = _.getEmptyFields(form);

		if (emptyFields.length) {
			const newState = { ...errs };

			emptyFields.forEach((el: string) => {
				_.set(newState, el, true);
			});

			setErrs(newState);
		} else {
			dispatch(createPost(form))
				.then(e => {
					router.push('/');
				})
				.catch(e => alert(e));
		}
	};

	return (
		<ConstructPage
			headerTitle={'New Post'}
			topSide={
				<>
					<div className="flex">
						<BackLink href="/">Posts</BackLink>
					</div>
					<div className="flex" />
				</>
			}
			content={
				<div className="flex flex-1 flex-col mx-8">
					<div className="flex ml-6">
						<div className="flex items-center mr-2">
							<h1 className="font-semibold text-xl"> Title: </h1>
						</div>
						<div className="flex flex-1">
							<ResizebleTextarea
								value={form.title}
								error={errs.title}
								onChange={e => handleChangeTextArea(e, 'title')}
								minRows={1}
							/>
						</div>
					</div>
					<div className="flex">
						<ResizebleTextarea
							value={form.body}
							error={errs.body}
							onChange={e => handleChangeTextArea(e, 'body')}
							minRows={3}
						/>
					</div>
					<div className="flex flex-row-reverse mr-4 mt-1">
						<div>
							<Button onClick={e => handleCreateClick(e)}>Create Post</Button>
						</div>
					</div>
				</div>
			}
		/>
	);
}
// topSide={
// 			<>
// 				<div className="flex">
// 					<BackLink href="/">Posts</BackLink>
// 				</div>
// 				<div className="flex" />
// 			</>
// 		}

// content={
// 			<div className="flex flex-1 flex-col">
// 				<div className="flex">
// 					<Card />
// 				</div>
// 				<div className="flex flex-row-reverse px-16">
// 					<div>
// 						<Button onClick={e => alert()}>Create Post</Button>
// 					</div>
// 				</div>
// 			</div>
// 		}
