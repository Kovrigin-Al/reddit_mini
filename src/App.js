import React from 'react';
import './App.css';
import { Post } from './components/Posts/Post';
import { SearchBar } from './components/SearchBar/SearcBar';

function App() {
  return (
    <>
    <SearchBar />
    <div className="App">
     Header
    {/* <Post></Post> */}
    </div>
    </>
  );
}

export default App;
