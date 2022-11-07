import { useEffect, useState } from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import "./style.css";

// useEffect( () => {
//     votes === props.votes ? setColor
// }, [votes]
// )

export function Voter(props) {
  const [votes, setVotes] = useState(props.votes);
  return (
    <div className="voter">
      <GoArrowUp
        className="GoArrowUp"
        type="button"
        onClick={() =>
          setVotes(votes === props.votes ? props.votes + 1 : props.votes)
        }
        style={{ color: votes > props.votes ? "green" : "#6f6f6f" }}
      />
      <p
        style={{
          color:
            votes < props.votes
              ? "red"
              : votes > props.votes
              ? "green"
              : "#6f6f6f",
        }}
      >
        {votes > 1000 ? Math.round(votes/100)/10 + 'k' : votes}
      </p>
      <GoArrowDown
        className="GoArrowDown"
        onClick={() =>
          setVotes(votes === props.votes ? props.votes - 1 : props.votes)
        }
        style={{ color: votes < props.votes ? "red" : "#6f6f6f" }}
      />
    </div>
  );
}
