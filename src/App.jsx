import { useState } from 'react'
import './App.css'
import Instructions from './components/Instructions'
import 'bulma/css/bulma.min.css';
import GameWindow from './components/GameWindow';
import ScoreTimer from './components/ScoreTimer';
import Answers from './components/Answers';
import data from "./data.js"

function getRemainingEmojis() {
  let remainingEmojis = data.map(obj => {
    return {
      emoji: obj.emoji,
      category: obj.category
    }
  })
  shuffleArray(remainingEmojis);
  return remainingEmojis
}

// using Durstenfeld shuffle based on the implentation found here: https://stackoverflow.com/a/12646864
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [remainingEmojis, setRemainingEmojis] = useState(getRemainingEmojis());
  const [correctAnswers, setCorrectAnswers] = useState([]);

  let currentEmoji = remainingEmojis[0].emoji

  function handleAnswer(isFlag) {
    console.log(isFlag);
    let currentEmojiIsFlag = currentEmoji.category === "Flags";


    if (isFlag === currentEmojiIsFlag) {
      setCorrectAnswers([...correctAnswers, currentEmoji]);

      let [first, ...remaining] = remainingEmojis;

      setRemainingEmojis(remaining);

    } else {
      // playerLoses("You lose. Try again!")
    }
  }



  return (
    <div className="App">
      <Instructions></Instructions>
      <GameWindow emoji={currentEmoji} handler={handleAnswer}></GameWindow>
      <ScoreTimer></ScoreTimer>
      <Answers></Answers>
    </div>
  )
}

export default App
