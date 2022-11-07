import { useDispatch } from "react-redux";
import { updateQuery } from "../SearchBar/searchBarSlice";

export function Subreddit(props) {
  const dispatch = useDispatch();

  const handleClick = () => {
    alert("clicked");
    dispatch(updateQuery(props.url));
  };

  return (
    <div className="subreddit">
      <button onClick={handleClick}>
        <img src={props.pic || require("./logo.png")} alt="icon" />
        <p>{props.subredditName}</p>
      </button>
    </div>
  );
}
