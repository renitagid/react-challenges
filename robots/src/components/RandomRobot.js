import React, { useState } from "react";

const RandomRobot = (props) => {
  const random = (input) => {
    let arrayed = input.split(" ");
    let reversed = arrayed.splice(2, arrayed.length - 3);
    let stringed = reversed.join(" ");

    return stringed;
  };
  return <>{random(props.input)}</>;
};

export default RandomRobot;
