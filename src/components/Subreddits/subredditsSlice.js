import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "subreddits",
  initialState: {
    subreddits: [],
    status: "idle",
    error: null,
    limit: 10,
  },
  reducers: {
    // addPosts: (state, action) => {
    //     state.posts = action.payload;
    // }
  },
  extraReducers(builder) {
    builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.subreddits = action.payload.data.children.map(
        (children) => children.data
      );
    });
    //.addCase(fetchPosts.pending, (state, action) => {})
    //.addCase(fetchPosts.rejected, (state, action) => {})
  },
};

const subredditsSlice = createSlice(options);

export const selectSubreddits = (state) => state.subreddits.subreddits;

// export const { addPosts } = postsSlice.actions;
export default subredditsSlice.reducer;
export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async (x, thunkAPI) => {
    const { getState } = thunkAPI;
    const state = getState();
    // console.log(state.searchBar)
    // console.log('https://www.reddit.com/' + state.searchBar.searchQuery + '.json?limit=' + state.searchBar.limit);
    // const response = await fetch('https://www.reddit.com/.json?limit=10')
    let url;
    url = `https://www.reddit.com/subreddits/.json?limit=${+state.subreddits
      .limit}`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);
