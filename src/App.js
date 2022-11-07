import React from "react";
import "./App.css";
import { Post } from "./components/Posts/Post";
import { Posts } from "./components/Posts/Posts";
import { SearchBar } from "./components/SearchBar/SearcBar";
import { Subreddits } from "./components/Subreddits/Subreddits";

function App() {
  return (
    <>
      <SearchBar />
      <div className="body">
        <div className="posts">
          <Posts />
        </div>
        <Subreddits />
      </div>
    </>
  );
}

export default App;
