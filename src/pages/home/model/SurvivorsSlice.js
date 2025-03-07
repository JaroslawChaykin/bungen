import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

import { getRandomCharacteristic } from "src/shared/lib/getRandomCharacteristic";
import { characteristicLimit } from "src/shared/model/characteristicsLimit";

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
      if (state.survivors.length === 10) {
        return;
      }

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
          "health",
        ];

        const characteristics = fields.reduce((acc, item) => {
          let randomCharacteristic = getRandomCharacteristic(item);

          if (state.usedParams[item]) {
            while (state.usedParams[item].includes(randomCharacteristic)) {
              if (characteristicLimit[item] === state.usedParams[item].length) {
                state.usedParams[item] = [];
              }

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
