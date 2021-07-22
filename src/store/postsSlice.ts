import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from '../axios';

interface Post {
	id?: number | string;
	title: string;
	body: string;
}

type Posts = Array<Post>;

export const getPosts = createAsyncThunk('/posts/get', async (_, { rejectWithValue }) => {
	try {
		const res = await axios.get('posts');
		const data = await res.data;

		return data;
	} catch (err) {
		return rejectWithValue('Something wrong');
	}
});


interface PostsState {
	data: Posts;
	status: 'idle' | 'pending' | 'succeeded' | 'failed';
	error: unknown;
}

const initialState = {
	data: [],
	status: 'idle',
	error: null
} as PostsState;

const postsSlice = createSlice({
	name: 'companyApp/company',
	initialState,
	reducers: {},
	extraReducers: builder => {
			builder.addCase(getPosts.pending, state => {
				state.status = 'pending';
				state.data = [];
			});
			builder.addCase(getPosts.fulfilled, (state, action: PayloadAction<Posts>) => {
				state.data.push(...action.payload);
				state.status = 'succeeded';
			});
			builder.addCase(getPosts.rejected, (state, action) => {
				if (action.payload) state.error = action.payload;
				state.status = 'failed';
			});
	}
});


const { reducer } = postsSlice;

// export const { setPosts } = actions;

export default reducer;