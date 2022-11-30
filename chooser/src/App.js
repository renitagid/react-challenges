import "./App.css";
import React, { useState } from "react";
import User from "./components/User";

const App = () => {
  let [choices, setChoices] = useState([
    "food",
    "park",
    "movie",
    "concert",
    "bar",
    "board game",
    "picnic",
    "open mic",
    "improv night",
    "karaoke",
    "paint and sip",
    "netflix and chill",
  ]);
  let [listA, setListA] = useState([]);
  let [listB, setListB] = useState([]);
  let [match, setMatch] = useState("");
  let [shared, setShared] = useState([]);

  const addToChoices = (string) => {
    setChoices([...choices, string]);
  };
  const addToListA = (string) => {
    if (listA.includes(string) === false) {
      setListA([...listA, string]);
    }
    if (listB.includes(string)) {
      setMatch(string);
      setShared([...shared, string]);
    } else {
      setMatch("");
    }
  };
  const addToListB = (string) => {
    if (listB.includes(string) === false) {
      setListB([...listB, string]);
    }
    if (listA.includes(string)) {
      setMatch(string);
      setShared([...shared, string]);
    } else {
      setMatch("");
    }
  };

  return (
    <>
      <div>
        <User
          choices={choices}
          addToListA={addToListA}
          listA={listA}
          match={match}
          addToListB={addToListB}
          listB={listB}
          addToChoices={addToChoices}
          shared={shared}
        />
      </div>
    </>
  );
};

export default App;
