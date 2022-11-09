import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import "./style.css";
// import pluralize from "pluralize";
import { Voter } from "../../features/voter/Voter";
import {FaRegCommentAlt} from 'react-icons/fa'
import { Comments } from "../../features/comments/Comments";
import { useEffect, useState } from "react";
import { timeAgo } from "../../helperFunctions/timeCalculator/timeCalculator";
import { fetchComments, selectCommentsByPostId } from "../../features/comments/commentsSlice";
import { Loading } from "../../features/loading/Loading";


export function Post(props) {

  const [commentsLoaded, setCommentsLoaded] = useState(false)
  const [commentsVisibility, setCommentsVisibility] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    setCommentsVisibility(commentsVisibility ? false : true);

    if (!commentsLoaded) {
      dispatch(fetchComments({url: 'https://www.reddit.com'+props.permalink+'.json', postId: props.id}));
      setCommentsLoaded(true);
    };
  }

  return (
    <>
    <div className="post">
      <div className="sideBar hide">
        <Voter votes={props.ups} />
      </div>
      <div className="main">
        <div className="topBar">
          <h3>{props.title}</h3>
        </div>
        <div className="middleBar">
          {props.post_hint === "hosted:video" ? (
            <video src={props.video} type="video" width="100%" controls></video>
          ) : props.post_hint === "image" ? (
            <img src={props.preview} alt="preview" />
          ) : props.post_hint === "link" ? (
            <a href={props.preview}> link </a>
          ) : (
            ""
          )}
          <hr></hr>
        </div>
        <div className="bottomBar">
          <p>
            <strong>by {props.author}</strong>
          </p>
          <p>{timeAgo(props.created_time)}</p>
          <p onClick={handleClick}>
            {props.comments > 1000
              ? Math.round(props.comments / 100) / 10 + "k"
              : props.comments}{" "}
            <FaRegCommentAlt className="FaRegCommentAlt"/>
          </p>
        </div>
      
      {commentsVisibility ? <Comments id={props.id}/> : ''}
      </div>
    </div>
    </>
  );
}
