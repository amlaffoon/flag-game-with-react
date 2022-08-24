import { useState } from 'react'
import './App.css'
import Instructions from './components/Instructions'
import 'bulma/css/bulma.min.css';
import GameWindow from './components/GameWindow';
import ScoreTimer from './components/ScoreTimer';
import Answers from './components/Answers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Instructions></Instructions>
      <GameWindow></GameWindow>
      <ScoreTimer></ScoreTimer>
      <Answers></Answers>
    </div>
  )
}

export default App
