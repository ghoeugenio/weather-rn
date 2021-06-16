import {configureStore} from '@reduxjs/toolkit';
import recentSearchReducer from './recentSearch';

const store = configureStore({
	reducer: {
		recentSearch: recentSearchReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
