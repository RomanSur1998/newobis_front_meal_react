import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mealSlices from "../store/reducers/MealSlice";
import searchSlice from "../store/reducers/SearchSlice";

const rootReducers = combineReducers({
  mealSlices,
  searchSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};
