import "./App.css";
import React, { useState } from "react";
import Colorbox from "./components/Colorbox";

const App = () => {
  const [boxes, setBoxes] = useState([]);
  const newBox = () => {
    setBoxes([...boxes, "box"]);
  };
  return (
    <>
    <div className="buttonholder">
      <button className="button"
        onClick={() => {
          newBox();
        }}
      >
        New Box!
      </button>
      </div>
      <p>Click the box to change the color.</p>
      <div className="boxholder">
        {boxes.map((value, index) => {
          return <Colorbox />;
        })}
      </div>
    </>
  );
};

export default App;
