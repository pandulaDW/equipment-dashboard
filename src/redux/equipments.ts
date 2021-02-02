import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

// CountType defines the count object of equipments
export interface CountType {
  [key: string]: number;
}

// Fetch response type
interface FetchResponseType {
  OpItemCount: number;
  NonOpItemCount: number;
  EquipmentCount: CountType;
}

// Equipment state structure
interface State {
  OpItemCount: FetchResponseType["OpItemCount"] | undefined;
  NonOpItemCount: FetchResponseType["NonOpItemCount"] | undefined;
  EquipmentCount: FetchResponseType["EquipmentCount"];
  loading: boolean;
  errorMsg: string | undefined;
}

// initial state
const initialState: State = {
  OpItemCount: undefined,
  NonOpItemCount: undefined,
  loading: false,
  EquipmentCount: {},
  errorMsg: "fetching error",
};

// action creators
export const fetchEquipmentData = createAsyncThunk(
  "scrape/fetchEquipmentData",
  async (_, thunkAPI) => {
    try {
      let response: AxiosResponse<FetchResponseType>;
      response = await axios.get("http://localhost/equipments");
      return response.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue("Error fetching data");
    }
  }
);

// reducer
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchEquipmentData.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchEquipmentData.fulfilled, (state, action) => {
      state.loading = false;
      // state.errorMsg = undefined;
      state.OpItemCount = action.payload.OpItemCount;
      state.NonOpItemCount = action.payload.NonOpItemCount;
      state.EquipmentCount = action.payload.EquipmentCount;
    })
    .addCase(fetchEquipmentData.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload as string;
    });
  builder.addDefaultCase((state) => state);
});
