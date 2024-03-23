import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { clientSlice } from "../slices/clientSlice";

const rootReducer = combineReducers({
  client: clientSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
