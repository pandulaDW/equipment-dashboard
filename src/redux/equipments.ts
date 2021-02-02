import { createAction, createReducer } from "@reduxjs/toolkit";

// equipment state structure
interface State {
  OpItemCount: number;
  NonOpItemCount: number;
}

// initial state
const initialState: State = {
  OpItemCount: 0,
  NonOpItemCount: 0,
};

// action creators
const initialPopulation = createAction("equipments/populate");

// reducer
export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(initialPopulation, (state) => {
    state.OpItemCount = 27;
    state.NonOpItemCount = 23;
  });
  builder.addDefaultCase((state) => state);
});
