import {createSlice} from '@reduxjs/toolkit';

type ISearch = {
	city: string | null;
	state: string | null;
	country: string | null;
};

interface IRecentSearch {
	recent: Array<ISearch>;
}

const InitialState: IRecentSearch = {recent: []};

const recentSearchSlice = createSlice({
	name: 'recentSearch',
	initialState: InitialState,
	reducers: {
		setRecentSearch(state: IRecentSearch, action) {
			const existCity = state.recent.find(
				(item) => item.city === action.payload.city
			);
			if (existCity) {
				return;
			}
			if (state.recent?.length === 3) {
				state.recent.shift();
			}
			state.recent.push(action.payload);
		},
	},
});

export const recentSearchActions = recentSearchSlice.actions;

export default recentSearchSlice.reducer;
