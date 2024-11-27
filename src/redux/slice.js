import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getAllCampersThunk, getCamperByIdThunk } from './operations';

const initialState = {
	campers: [],
	camperPage: null,
	loading: false,
	error: null,
};

const campersSlice = createSlice({
	name: 'campers',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllCampersThunk.fulfilled, (state, action) => {
				state.campers = action.payload;
				state.loading = false;
			})

			.addCase(getCamperByIdThunk.fulfilled, (state, action) => {
				state.camperPage = action.payload;
				state.loading = false;
			})

			.addMatcher(isAnyOf(getAllCampersThunk.pending, getCamperByIdThunk.pending), state => {
				state.loading = true;
				state.error = null;
			})

			.addMatcher(
				isAnyOf(getAllCampersThunk.rejected, getCamperByIdThunk.rejected),
				(state, action) => {
					state.loading = false;
					state.error = action.payload;
				}
			);
	},
});

export const campersReducer = campersSlice.reducer;
