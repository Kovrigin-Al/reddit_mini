import "./style.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { updateQuery } from "./searchBarSlice";
import { useDispatch } from "react-redux";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  function handleChange({ target }) {
    setSearch(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateQuery(search));
  }

  const handleClick = () => {
    dispatch(updateQuery(""));
  };

  return (
    <div className="header">
      <div className="logo container">
        <a href="#top" onClick={handleClick}>
          <img alt="logo" src={require("./logo.png")} />
          <p className="site-name hide">RedditMini</p>
        </a>
      </div>
      <div className="search-bar container">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search Reddit"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">
            <FaSearch className="FaSearch" />
          </button>
        </form>
      </div>
    </div>
  );
}
