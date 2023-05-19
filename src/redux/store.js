import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./userSlice";

const store = configureStore({
  reducer: { users: usersSlice.reducer },
});
export default store;
