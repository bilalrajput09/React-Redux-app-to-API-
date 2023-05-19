import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: false,
    hasError: undefined,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsersActionCreator.pending, (state, action) => {
      console.log("Coming");
      state.isLoading = true;
    });
    builder.addCase(fetchUsersActionCreator.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsersActionCreator.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = action.payload;
    });
  },
});

export const fetchUsersActionCreator = createAsyncThunk(
  "fetch/users",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=5");
      const data = await response.json();
      console.log(data.results);
      return data.results;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export default usersSlice;
