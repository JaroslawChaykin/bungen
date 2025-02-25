import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { SurvivorSlice } from "../../pages/home/model/SurvivorsSlice";

const reducers = combineReducers({
  survivors: SurvivorSlice.reducer,
});

export const mainStore = configureStore({
  reducer: reducers,
});
