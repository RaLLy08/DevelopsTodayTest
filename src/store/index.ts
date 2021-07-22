import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import postsReducer from './postsSlice';
import postReducer from './postSlice';
// import postReducer from './post';
// import commentsReducer from './comments';

const rootReducer = combineReducers({
	posts: postsReducer,
	// comments: commentsReducer,
	post: postReducer
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// typed dispatcher and selector
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// 

export default store;

