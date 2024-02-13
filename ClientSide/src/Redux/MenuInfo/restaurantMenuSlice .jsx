// cartSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurantMenuData: null,
  // other state properties
};

const restaurantMenuSlice = createSlice({
  name: "restaurantMenu",
  initialState,
  reducers: {
    setRestaurantMenuData(state, action) {
      state.restaurantMenuData = action.payload;
    },
    // other reducers if needed
  },
});

export const { setRestaurantMenuData } = restaurantMenuSlice.actions;
export default restaurantMenuSlice.reducer;
