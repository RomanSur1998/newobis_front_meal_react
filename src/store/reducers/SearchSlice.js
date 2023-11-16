import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
};

export const searchSlice = createSlice({
  name: "search_meal",
  initialState,
  reducers: {
    getMiles(state, action) {
      state.meals = action.payload;
    },
  },
});

export default searchSlice.reducer;
