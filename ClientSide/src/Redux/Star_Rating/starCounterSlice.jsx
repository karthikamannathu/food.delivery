// starCounterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  starCounts: {},
};

const starCounterSlice = createSlice({
  name: 'starCounter',
  initialState,
  reducers: {
    setStarCount: (state, action) => {
      const { starValue, newCount } = action.payload;
      state.starCounts[starValue] = Math.max(0, newCount);
    },
  },
});

export const { setStarCount } = starCounterSlice.actions;
export default starCounterSlice.reducer;
