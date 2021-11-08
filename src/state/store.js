import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import retroReducer from "../features/retros/retroSlice";

export default configureStore({
  reducer: {
    retro: retroReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
