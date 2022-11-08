import React, { useState } from "react";

const Colorbox = () => {
        const [color, setColor] = useState([
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "purple",
          "pink",
        ]);
        let [colorIndex, setColorIndex] = useState(0);
        const handleClick = () => {
          let randomNum = Math.floor(Math.random() * color.length) 
          setColorIndex(randomNum)
         }


  return (
    <>
      <div 
      onClick={handleClick}
        style={{
          flex: 1,
          backgroundColor: color[colorIndex],
          borderStyle: "solid",
          height: 100,
          width: 100,
          textAlign: "center",
        }}
      >
        {color[colorIndex]}
      </div>

    </>
  );
};

export default Colorbox;
