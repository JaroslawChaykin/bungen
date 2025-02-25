import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getRandomCharacteristic } from "../../../shared/lib/getRandomСharacteristic";

const initialState = {
  survivors: [],
  usedParams: {
    profession: [],
    phobia: [],
    hobby: [],
    baggage: [],
    fact1: [],
    fact2: [],
  },
};

export const survivorSlice = createSlice({
  initialState,
  name: "Survivors",
  reducers: {
    addSurvivor(state) {
      console.log(getRandomCharacteristic());

      state.survivors.push({
        id: uuid(),
        name: "Sara",
        age: 25,
        sex: "",
        profession: "",
        phobia: "",
        hobby: "",
        baggage: "",
        fact1: "",
        fact2: "",
      });
    },
    removeSurvivor(state, action) {
      state.survivors = state.survivors.filter(
        (survivor) => survivor.id !== action.payload
      );
    },
    clean(state) {
      state.survivors = [];
      state.usedParams = {
        profession: [],
        phobia: [],
        hobby: [],
        baggage: [],
        fact1: [],
        fact2: [],
      };
    },
  },
});

export const { addSurvivor, removeSurvivor } = survivorSlice.actions;
