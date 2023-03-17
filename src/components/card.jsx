import React from "react";
import "./card.css";
import { Button, ButtonGroup } from '@chakra-ui/react'

function card(props) {
  const handleClick = (e) => {
    return alert("You clicked " + props.title);
  };
  return (
    <>
      <div className="card">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        {/* <button onClick={handleClick}>click me</button> */}
        <Button colorScheme='green' onClick={handleClick}>click me</Button>
      </div>
    </>
  );
}

export default card;
