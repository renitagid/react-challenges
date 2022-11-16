
import { useState } from 'react';
import './App.css';
import BadRobot from './components/BadRobot';
import RandomRobot from './components/RandomRobot';
import ReverseRobot from './components/ReverseRobot';

function App() {
  const [userInput, setUserInput] = useState("")
  const handleChange = (e) => {
    setUserInput(e.target.value)
  }


  return (
    
   <>
   <h1>The Three Stooges</h1>
   <input type="text" value={userInput} onChange={handleChange} style={{width: 1000}}/>
   <p>Good Robot says: I heard you say "{userInput}"</p>
   <p>Bad Robot says: <BadRobot input={userInput}/></p>
   <p>Reverse Robot says: <ReverseRobot input={userInput}/></p>
   <p>Hard of hearing Robot says: Ehh? I only heard you say "<RandomRobot input={userInput} />." Speak up!</p>
  
   </>
  )
}

export default App;
