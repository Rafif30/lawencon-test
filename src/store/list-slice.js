import { createSlice } from "@reduxjs/toolkit";

const filmSlice = createSlice({
  name: "film",
  initialState: {
    film: [],
    totalResults: "",
  },
  reducers: {
    replaceFilm(state, action) {
      state.totalResults = action.payload.totalResults;
      state.film = action.payload.film;
    },
  },
});

export const filmSliceActions = filmSlice.actions;

export default filmSlice;
