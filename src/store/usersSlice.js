import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async ({ page, results }, thunkAPI) => {
    try {
      const data = await fetch(
        `https://randomuser.me/api/?seed=fm2024&page=${page}&results=${results}`
      ).then((response) => response.json());
      return data.results;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    //eslint-disable-next-line
    builder.addCase(getUsers.pending, (state, action) => {
      state.isPending = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isPending = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
  },
});

export default usersSlice.reducer;
