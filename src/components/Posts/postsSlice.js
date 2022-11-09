import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
};

const postsSlice = createSlice(options);

export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer;
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (arg, thunkAPI) => {
    const { getState } = thunkAPI;
    const state = getState();
    const url = state.searchBar.searchQuery
      ? `https://www.reddit.com/search.json?q=${
          state.searchBar.searchQuery
        }&limit=${+state.searchBar.limit}` //
      : `https://www.reddit.com/.json?limit=${+state.searchBar.limit}`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
  }
);
