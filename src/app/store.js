import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import appResucer from "../features/appSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    app: appResucer,
  },
});
