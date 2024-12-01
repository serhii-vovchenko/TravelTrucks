import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCampersThunk, getCamperByIdThunk, getFilterCampersThunk } from './operations';

const initialState = {
	campers: [],
	total: null,
	// camperPage: null,
	loading: false,
	error: null,
};

const campersSlice = createSlice({
	name: 'campers',
	initialState,
	reducers: {
		cleanCampers(state) {
			state.campers = [];
			state.camperPage = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getCampersThunk.fulfilled, (state, action) => {
				state.campers.push(...action.payload.items);
				state.total = action.payload.total;
				state.loading = false;
			})

			.addCase(getFilterCampersThunk.fulfilled, (state, action) => {
				state.campers = [];
				state.campers.push(...action.payload.items);
				state.total = action.payload.total;
				state.loading = false;
			})

			.addCase(getCamperByIdThunk.fulfilled, (state, action) => {
				state.camperPage = action.payload;
				state.loading = false;
			})

			.addMatcher(
				isAnyOf(getCampersThunk.pending, getFilterCampersThunk.pending, getCamperByIdThunk.pending),
				state => {
					state.loading = true;
					state.error = null;
				}
			)

			.addMatcher(
				isAnyOf(
					getCampersThunk.rejected,
					getFilterCampersThunk.rejected,
					getCamperByIdThunk.rejected
				),
				(state, action) => {
					state.loading = false;
					state.error = action.payload;
				}
			);
	},
});

export const { cleanCampers } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
