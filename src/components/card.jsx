import React from "react";
import "./card.css";

function card(props) {
  const handleClick = (e) => {
    return alert("You clicked " + props.title);
  };
  return (
    <>
      <div className="card">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <button onClick={handleClick}>click me</button>
      </div>
    </>
  );
}

export default card;
