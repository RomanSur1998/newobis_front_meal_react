import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducers = combineReducers({});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducers,
  });
};
