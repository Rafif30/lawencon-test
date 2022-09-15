import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    title: "",
    year: "",
    rated: "",
    relased: "",
    genre: "",
    director: "",
    writer: "",
    actor: "",
    poster: "",
  },
  reducers: {
    replaceDetail(state, action) {
      state.title = action.payload.title;
      state.year = action.payload.year;
      state.genre = action.payload.genre;
      state.rated = action.payload.rated;
      state.relased = action.payload.relased;
      state.poster = action.payload.poster;
      state.director = action.payload.director;
      state.writer = action.payload.writer;
      state.actor = action.payload.actor;
    },
  },
});

export const detailSliceActions = detailSlice.actions;

export default detailSlice;
