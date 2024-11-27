import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const PATH_API = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/';

export const getAllCampersThunk = createAsyncThunk('campers', async (_, thunkAPI) => {
	try {
		const { data } = await axios.get(`${PATH_API}campers`);
		console.log('getAllCampers: ', data);
		return data;
	} catch (error) {
		console.log(error);
	}
});

export const getCamperByIdThunk = createAsyncThunk('camperPage', async (id, thunkAPI) => {
	try {
		const { data } = await axios.get(`${PATH_API}campers/${id}`);
		console.log('getById: ', data);
		return data;
	} catch (error) {
		console.log(error);
	}
});
