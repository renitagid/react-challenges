import React, { useState } from "react";
import Match from "./Match";

const ViewA = (props) => {
  const [currentOption, setCurrentOption] = useState();
  let [choicesA, setChoicesA] = useState([...props.choices]);

  const generate = (array) => {
    setCurrentOption(
      array.splice(Math.floor(Math.random() * array.length), 1)[0]
    );
    return currentOption;
  };

  const answerA = (activity) => {
    props.addToListA(activity);
    generate(choicesA);
  };
  const [userInputA, setUserInputA] = useState("");
  const handleChangeA = (e) => {
    console.log(e.target.value);
    setUserInputA(e.target.value);
  };

  const handleClickA = (input) => {
    props.addToListA(input);
    props.addToChoices(input);
  };

  return (
    <>
    <div>
      <button
        onClick={() => {
          generate(choicesA);
        }}
      >
        Let's get started!
      </button>
      </div>
      <div>
        <div>
          <h1>Person A</h1>What do you think about... <strong style={{color: "maroon", fontSize: 20}}>{currentOption}</strong>
        </div>
        <button
          onClick={() => {
            answerA(currentOption);
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            generate(choicesA);
          }}
        >
          No
        </button>
      </div>

      <div>Add your own idea! We'll let Person B vote on it too:</div>
      <input type="text" value={userInputA} onChange={handleChangeA} />
      <button
        onClick={() => {
          handleClickA(userInputA);
        }}
      >
        Submit
      </button>
      <div>
        My List:{" "}
        <div>
          {props.listA.map((value) => (
            <div>{value}</div>
          ))}
        </div>
      </div>
      <h1>
        <Match match={props.match} />
      </h1>
      <div>
        My matches with Person B
        <div>
          {props.shared.map((value) => (
            <div>{value}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewA;
