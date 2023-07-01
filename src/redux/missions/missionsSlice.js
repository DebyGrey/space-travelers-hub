import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  isLoading: true,
  isError: false,
};

const getMissionsURL = 'https://api.spacexdata.com/v3/missions/';
export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async (_, thunkAPI) => {
    try {
      const response = await axios(getMissionsURL);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) return mission;
        return { ...mission, reserved: true };
      });
      state.missions = newMissions;
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id !== missionId) return mission;
        return { ...mission, reserved: !mission.reserved };
      });
      state.missions = newMissions;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.missions = action.payload;
        state.missions = action.payload.map((mission) => ({
          ...mission,
          reserved: false,
        }));
      })
      .addCase(getMissions.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
