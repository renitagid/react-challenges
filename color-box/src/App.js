import React, { useState } from "react";
import Colorbox from "./components/Colorbox"


const App = () => {
  const newBox = () => {
   return <Colorbox/>
  }
  return (
    <>
      <Colorbox/>
      <Colorbox/>
  
      <button onClick={newBox}>New Box!</button>
    </>
  )
}

export default App