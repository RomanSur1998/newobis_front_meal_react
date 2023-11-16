import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mealSlices from "../store/reducers/MealSlice";

const rootReducers = combineReducers({
  mealSlices,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};
