import { timeAgo } from "../../helperFunctions/timeCalculator/timeCalculator";

export function Comment(props) {
  return (
    <div className="comment" id="">
      <div className="comment_header">
        <div className="author">{props.author}</div>
        <div className="time">{timeAgo(props.time)}</div>
      </div>
      <div className="comment_body">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
