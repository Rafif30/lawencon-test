import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { filmIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.filmIsVisible = !state.filmIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiSliceAction = uiSlice.actions;

export default uiSlice;
