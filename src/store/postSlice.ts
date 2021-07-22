import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../axios';

interface Comment {
    id?: number | string,
    postId: number | string,
    body: string,
}

interface Post {
	id?: number | string;
	title: string;
	body: string;
	comments?: Array<Comment>; // I know it's wrong but there are no rules _-_
}

export const getPostById = createAsyncThunk('/post/get/PostById', async (id: number | string, { rejectWithValue }) => {
	try {
		const res = await axios.get(`posts/${id}?_embed=comments`);
		const data = await res.data;

		return data;
	} catch (err) {
		return rejectWithValue('Something wrong');
	}
});


export const createPost = createAsyncThunk('/post/post/Post', async (post: Post, { rejectWithValue }) => {
	try {
		await axios.post(`posts`, post);
		
		return null;
	} catch (err) {
		return rejectWithValue('Something wrong');
	}
});

export const createComment = createAsyncThunk('/post/Comment', async (comment: Comment, { rejectWithValue }) => {
	try {
		const res = await axios.post(`comments`, comment);
		
		const data = await res.data;

		return data;
	} catch (err) {
		return rejectWithValue('Something wrong');
	}
});
// 
// export const editPost = createAsyncThunk('/put/Post', async ({ id, post }: { id: number | string, post: Post }, { rejectWithValue }) => {
// 	try {
// 		const res = await axios.put(`posts/${id}`, post);

// 		const data = await res.data;

// 		return data;
// 	} catch (err) {
// 		return rejectWithValue('Something wrong');
// 	}
// });
/// 

interface PostState {
	data: Post | null;
	status: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: unknown;
}

const initialState = {
	data: null,
	status: 'idle',
	error: null
} as PostState;

const postSlice = createSlice({
	name: 'companyApp/company',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getPostById.pending, state => {
			state.status = 'pending';
			state.data = null;
		});
		builder.addCase(getPostById.fulfilled, (state, action: PayloadAction<Post>) => {
			state.data = action.payload;
			state.status = 'succeeded';
		});
		builder.addCase(getPostById.rejected, (state, action) => {
			if (action.payload) state.error = action.payload;
			state.status = 'failed';
		});
		builder.addCase(createPost.pending, state => {
			state.status = 'pending';
			// state.data = null;
		});
		builder.addCase(createPost.fulfilled, (state) => {
			// state.data = null;
			state.status = 'succeeded';
		});
		builder.addCase(createPost.rejected, (state, action) => {
			if (action.payload) state.error = action.payload;
			state.status = 'failed';
		});
		builder.addCase(createComment.pending, state => {
			state.status = 'pending';
			// state.data = null;
		});
		builder.addCase(createComment.fulfilled, (state, action) => {
			state.data?.comments?.push(action.payload);
			state.status = 'succeeded';
		});
		builder.addCase(createComment.rejected, (state, action) => {
			if (action.payload) state.error = action.payload;
			state.status = 'failed';
		});
	}
});

const { reducer } = postSlice;

// export const { setPosts } = actions;

export default reducer;
