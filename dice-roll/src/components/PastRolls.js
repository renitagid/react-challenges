import React from "react";

const PastRolls = (props) => {
  return (
    <>
      <h1>Previous Roll</h1>
      {props.lastRoll.map((roll, index) => {
        return (
          <div style={{ width: 100, textAlign: "center" }} key={index}>
            {roll}
          </div>
        );
      })}
    </>
  );
};
export default PastRolls;
