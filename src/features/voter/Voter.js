import { useState } from "react";
import { GoArrowUp, GoArrowDown } from "react-icons/go";
import { formating } from "../../helperFunctions/formatingQuantity";
import "./style.css";

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
      
      {/* votes quantity */}
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
        {formating(votes)}
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
