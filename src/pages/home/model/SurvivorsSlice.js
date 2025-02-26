import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { getRandomCharacteristic } from "../../../shared/lib/getRandomCharacteristic";

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
    addSurvivor(state, action) {
      const generateCharacteristics = () => {
        const fields = [
          "age",
          "fertility",
          "sex",
          "profession",
          "phobia",
          "hobby",
          "baggage",
          "fact1",
          "fact2",
          'health'
        ];

        const characteristics = fields.reduce((acc, item) => {
          let randomCharacteristic = getRandomCharacteristic(item);

          if (state.usedParams[item]) {
            while (state.usedParams[item].includes(randomCharacteristic)) {
              randomCharacteristic = getRandomCharacteristic(item);
            }

            state.usedParams[item].push(randomCharacteristic);
          }

          acc[item] = randomCharacteristic;

          return acc;
        }, {});

        return characteristics;
      };

      state.survivors.push({
        id: uuid(),
        name: action.payload,
        ...generateCharacteristics(),
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

export const { addSurvivor, removeSurvivor, clean } = survivorSlice.actions;
