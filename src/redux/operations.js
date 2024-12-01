import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PATH_API = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const getCampersThunk = createAsyncThunk('campers', async (query, thunkAPI) => {
	try {
		const { data } = await axios.get(`${PATH_API}campers`, { params: { ...query } });
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const getFilterCampersThunk = createAsyncThunk('camperFilter', async (query, thunkAPI) => {
	try {
		const { data } = await axios.get(`${PATH_API}campers`, { params: { ...query } });
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const getCamperByIdThunk = createAsyncThunk('camperPage', async (id, thunkAPI) => {
	try {
		const { data } = await axios.get(`${PATH_API}campers/${id}`);
		return data;
	} catch (error) {
		console.log(error);
	}
});
