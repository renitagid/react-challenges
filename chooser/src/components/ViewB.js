import React, { useEffect, useState } from "react";
import Match from "./Match";

const ViewB = (props) => {
  const [currentOption, setCurrentOption] = useState();
  let [choicesB, setChoicesB] = useState([...props.choices]);

  const generate = (array) => {
    setCurrentOption(
      array.splice(Math.floor(Math.random() * array.length), 1)[0]
    );
    return currentOption;
  };

  const answerB = (activity) => {
    props.addToListB(activity);
    generate(choicesB);
  };
  const [userInputB, setUserInputB] = useState("");
  const handleChangeB = (e) => {
    console.log(e.target.value);
    setUserInputB(e.target.value);
  };

  const handleClickB = (input) => {
    props.addToListB(input);
    props.addToChoices(input);
  };

  return (
    <>
    <div>
      <button
        onClick={() => {
          generate(choicesB);
        }}
      >
        Let's get started!
      </button>
      </div>
      <div>
        <div>
          <h1>Person B</h1>What do you think about... <strong style={{color: "maroon", fontSize: 20}}>{currentOption}</strong>
        </div>
        <button
          onClick={() => {
            answerB(currentOption);
          }}
        >
          Yes
        </button>
        <button
          onClick={() => {
            generate(choicesB);
          }}
        >
          No
        </button>
      </div>

      <div>Add your own idea! We'll let Person A vote on it too:</div>
      <input type="text" value={userInputB} onChange={handleChangeB} />
      <button
        onClick={() => {
          handleClickB(userInputB);
        }}
      >
        Submit
      </button>
      <div>
        My List:{" "}
        <div>
          {props.listB.map((value) => (
            <div>{value}</div>
          ))}
        </div>
      </div>
      <h1>
        <Match match={props.match} />
      </h1>
      <div>
        My matches with Person A
        {props.shared.map((value) => (
          <div>{value}</div>
        ))}
      </div>
    </>
  );
};

export default ViewB;
