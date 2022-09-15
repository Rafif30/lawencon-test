import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import filmSlice from "./list-slice";
import detailSlice from "./detail-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    film: filmSlice.reducer,
    detail: detailSlice.reducer,
  },
});

export default store;
