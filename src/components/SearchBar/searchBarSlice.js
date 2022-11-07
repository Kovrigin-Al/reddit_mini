import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "searchBar",
  initialState: {
    searchQuery: "",
    limit: 12,
  },
  reducers: {
    updateQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
};

export const seachBarSlice = createSlice(options);
export const { updateQuery } = seachBarSlice.actions;
export default seachBarSlice.reducer;
