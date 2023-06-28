import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: true,
  isError: false,
};

const getMissionsURL = 'https://api.spacexdata.com/v3/missions/';
export const getMissions = createAsyncThunk('missions/getMissions', async (thunkAPI) => {
  try {
    const response = await axios(getMissionsURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.missions = action.payload;
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default missionsSlice.reducer;
