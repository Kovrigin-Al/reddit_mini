import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
  name: "comments",
  initialState: {
    comments: { },
    limit: 20
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      //remove last comment as invalid for displaying
      let commentsArr = action.payload.comments;
      commentsArr.pop();

      state.comments[action.payload.postId] = {
        commentsArr: commentsArr,
        status: "succeeded"
      };
    });
    builder.addCase(fetchComments.pending, (state, action) => {
      // this creates structure in the slice. That allow to reffer to the state in function components
      state.comments[action.meta.arg.postId] = {commentsArr: []
      };
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.comments[action.meta.arg.postId].status = 'error';
      state.comments[action.meta.arg.postId].errorMessage = action.error.message;
    });
  },
};

const commentsSlice = createSlice(options);
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async ({ url, postId },{getState}) => {
    const state=getState();
    const response = await fetch(url+`?limit=`+state.comments.limit);
    const jsonResponse = await response.json();
    const comments = jsonResponse[1].data.children;
    return { comments, postId };
  }
);
export default commentsSlice.reducer;