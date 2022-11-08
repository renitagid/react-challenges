import React from "react";

const Dice = (props) => {
  return (
    <>
      <div
        onClick={props.rollDice}
        style={{
          backgroundColor: "white",
          height: 100,
          width: 100,
          borderStyle: "solid",
          borderWidth: 2,
          textAlign: "center",
          padding: 20,
          margin: 50,
          fontSize: 80,
        }}
      >
        {props.diceOptions[props.diceIndex]}
      </div>
    </>
  );
};

export default Dice;
