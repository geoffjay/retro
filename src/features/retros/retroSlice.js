import { createSlice } from "@reduxjs/toolkit";

import { fetchAllRetros } from "./actions";

const initialState = {
  retros: [],
  status: "idle",
  error: null,
};

export const retroSlice = createSlice({
  name: "retro",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllRetros.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAllRetros.fulfilled]: (state, action) => {
      state.retros = action.payload;
      state.status = "success";
    },
    [fetchAllRetros.rejected]: (state, action) => {
      state.error = action.error;
      state.status = "failed";
    },
  },
});

// these would come from the reducers {} here
export const {} = retroSlice.actions;

export const selectRetros = (state) => state.retros;
// export const selectRetroById = (state, id) => {
//   console.log(state);
//   return state.retro.retros.filter(retro => retro.id === id);
// };

export default retroSlice.reducer;
