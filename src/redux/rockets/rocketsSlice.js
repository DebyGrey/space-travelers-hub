import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  rockets: [],
  isLoading: true,
  isError: false,
};

export const fetchRockets = createAsyncThunk(
  'rockets/fetchRockets',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://api.spacexdata.com/v3/rockets',
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('There was an error');
    }
  },
);

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload;
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== rocketId) return rocket;
        return { ...rocket, reserved: true };
      });
      state.rockets = newRockets;
    },
    cancelReservation: (state, action) => {
      const rocketId = action.payload;
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== rocketId) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
      });
      state.rockets = newRockets;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.rockets = action.payload;
      })
      .addCase(fetchRockets.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
