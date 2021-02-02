import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as EquipmentReducer } from "./equipments";

const rootReducer = combineReducers({
  equipments: EquipmentReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
