import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "subreddits",
  initialState: {
    subreddits: [],
    error: null,
    limit: 10,
    status:''
  },
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.subreddits = action.payload.data.children.map(
        (children) => children.data
      );
    }).addCase(
      fetchSubreddits.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }
    )
  },
};

const subredditsSlice = createSlice(options);

export const selectSubreddits = (state) => state.subreddits.subreddits;

export default subredditsSlice.reducer;
export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async (x, thunkAPI) => {
    const { getState } = thunkAPI;
    const state = getState();
    let url;
    url = `https://www.reddit.com/subreddits/.json?limit=${+state.subreddits
      .limit}`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);
