import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Oleg",
    age: 21,
  },
];

export const SurvivorSlice = createSlice({
  initialState,
  name: "Survivors",
  reducers: {},
});
