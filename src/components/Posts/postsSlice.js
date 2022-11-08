import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // addPosts: (state, action) => {
    //     state.posts = action.payload;
    // }
  },
  extraReducers(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.posts = action.payload;
    })
    .addCase(fetchPosts.pending, (state, action) => {
      state.status = "pending";
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    })
  },
};

const postsSlice = createSlice(options);

export const selectPosts = (state) => state.posts.posts;

export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer;
export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (x, thunkAPI) => {
    const { getState } = thunkAPI;
    const state = getState();
    // console.log(state.searchBar)
    // console.log('https://www.reddit.com/' + state.searchBar.searchQuery + '.json?limit=' + state.searchBar.limit);
    // const response = await fetch('https://www.reddit.com/.json?limit=10')
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
