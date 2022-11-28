import React, { useState } from "react";
import "../App.css";

const Colorbox = () => {
        const [color, setColor] = useState([
          "lightBlue",
          "lightCoral",
          "darkSalmon",
          "lightSalmon",
          "mediumAquamarine",
          "burlyWood",
          "cornSilk",
          "cadetBlue",
          "cornflowerBlue",
          "darkGoldenRod",
          "darkKhaki",
          "darkOliveGreen",
          "darkSeaGreen",
          "darkSlateGray",
          "goldenRod",
          "indianRed",
          "orange",
          "peru",
          "rosyBrown",
          "skyBlue"
        ]);
        let [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * color.length));
        const handleClick = () => {
          let randomNum = Math.floor(Math.random() * color.length) 
          setColorIndex(randomNum)
         }


  return (
    <>
      <div 
      onClick={handleClick}
        style={{
          backgroundColor: color[colorIndex],
          height: 100,
          width: 100,
          textAlign: "center",
          fontSize: 10,
          padding: 10
        }}
      >
        {color[colorIndex]}
      </div>

    </>
  );
};

export default Colorbox;
