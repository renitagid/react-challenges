import "./App.css";
import { useState } from "react";
import PastRolls from "./components/PastRolls";
import Dice from "./components/Dice";

const App = () => {
  const [diceOptions] = useState([1, 2, 3, 4, 5, 6]);
  let [diceIndex, setDiceIndex] = useState(null);
  const [lastRoll, setLastRoll] = useState([]);
  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * diceOptions.length);
    setDiceIndex(randomNum);
    setLastRoll([...lastRoll, diceOptions[diceIndex]]);
  };
  return (
    <>
      <Dice
        diceOptions={diceOptions}
        diceIndex={diceIndex}
        rollDice={rollDice}
      />
      <PastRolls lastRoll={lastRoll} />
    </>
  );
};

export default App;
