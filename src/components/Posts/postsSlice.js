import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const options = {
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addPosts: (state, action) => {
            state.posts = action.payload;
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
        })
        //.addCase(fetchPosts.pending, (state, action) => {})
        //.addCase(fetchPosts.rejected, (state, action) => {})
    }
}


const postsSlice = createSlice(options);

export const selectPosts = (state) => state.posts.posts;

export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer;
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
        const response = await fetch('https://www.reddit.com/.json?limit=10');
        const jsonResponse = await response.json();
        return jsonResponse.data.children;
})

