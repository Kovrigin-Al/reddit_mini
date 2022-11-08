import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../components/Posts/postsSlice";
import seachBarSlice from "../components/SearchBar/searchBarSlice";
import redditsSlice from "../components/Subreddits/subredditsSlice";
import commentsSlice from "../features/comments/commentsSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    searchBar: seachBarSlice,
    subreddits: redditsSlice,
    comments: commentsSlice
  },
});
