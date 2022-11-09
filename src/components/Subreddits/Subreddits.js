import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../features/loading/Loading";
import "./style.css";
import { Subreddit } from "./Subreddit";
import { fetchSubreddits } from "./subredditsSlice";

export function Subreddits() {
  const redditsStatus = useSelector((state) => state.subreddits.status);
  const redditsError = useSelector((state) => state.subreddits.error);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchSubreddits());
  }, []);

  const subreddits = useSelector((state) => state.subreddits.subreddits).map(
    (subreddit) => {
      return {
        subredditName: subreddit.display_name,
        url: subreddit.display_name_prefixed,
        pic: subreddit.icon_img,
        id: subreddit.id
      };
    }
  );
  return (
    <div className="subreddits">
      <div className="subreddits-header">
        <h3>Subreddits</h3>
        <p>Top-10</p>
      </div>

      {redditsStatus === "error" ? (
        <p style={{textAlign: 'center', color: 'red'}}>{redditsError}</p>) :
        redditsStatus === "succeeded" ? subreddits.map((subreddit) => {
        return (
          <Subreddit
          key={subreddit.id}
            subredditName={subreddit.subredditName}
            url={subreddit.url}
            pic={subreddit.pic}
          />
        );
      }) : <Loading/>}
    </div>
  );
}
