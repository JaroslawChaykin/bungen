import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { survivorSlice } from "src/pages/home/model/SurvivorsSlice";

const reducers = combineReducers({
  survivors: survivorSlice.reducer,
});

export const mainStore = configureStore({
  reducer: reducers,
});
