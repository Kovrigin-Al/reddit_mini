import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Subreddit } from "./Subreddit";
import { fetchSubreddits } from "./subredditsSlice";

export function Subreddits() {
  const redditsStatus = useSelector((state) => state.subreddits.status);
  const dispatch = useDispatch();
  // const subreddits = useSelector((state) => state.subreddits.subreddits);

  useEffect(() => {
    if (redditsStatus === "idle") {
      dispatch(fetchSubreddits());
    }
  }, []);

  const subreddits = useSelector((state) => state.subreddits.subreddits).map(
    (subreddit) => {
      return {
        subredditName: subreddit.display_name,
        url: subreddit.display_name_prefixed,
        pic: subreddit.icon_img,
      };
    }
  );
  console.log(subreddits.subreddits);
  return (
    <div className="subreddits">
      <div className="subreddits-header">
        <h3>Subreddits</h3>
        <p>Top-10</p>
      </div>
      {subreddits.map((subreddit) => {
        return (
          <Subreddit
            subredditName={subreddit.subredditName}
            url={subreddit.url}
            pic={subreddit.pic}
          />
        );
      })}
    </div>
  );
}
