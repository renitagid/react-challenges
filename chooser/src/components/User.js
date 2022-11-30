import React, { useState } from "react";
import ViewA from "./ViewA";
import ViewB from "./ViewB";

const User = (props) => {
  let [user, setUser] = useState("");
  const chooseUser = (user) => {
    setUser(user);
  };
  return (
    <>
    <div className="top">
    <h3>Welcome to the activity chooser, where you and a partner can decide what to do today!</h3>
    <h2>Who are you?</h2>
      <button
        onClick={() => {
          chooseUser("a");
        }}
      >
        Person A
      </button>
      <button
        onClick={() => {
          chooseUser("b");
        }}
      >
        Person B
      </button>
      </div>
      {user === "a" ? (
        <ViewA
          choices={props.choices}
          addToListA={props.addToListA}
          listA={props.listA}
          match={props.match}
          addToChoices={props.addToChoices}
          shared={props.shared}
        />
      ) : user === "b" ? (
        <ViewB
          choices={props.choices}
          addToListB={props.addToListB}
          listB={props.listB}
          match={props.match}
          addToChoices={props.addToChoices}
          shared={props.shared}
        />
      ) : null}
    </>
  );
};

export default User;
