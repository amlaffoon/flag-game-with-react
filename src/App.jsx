import { useState, useEffect } from 'react'
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
  const [remainingEmojis, setRemainingEmojis] = useState(getRemainingEmojis());
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  let currentEmoji = remainingEmojis[0].emoji

  function handleAnswer(isFlag) {
    if (!isActive) {
      setIsActive(true);
    }

    let currentEmojiIsFlag = remainingEmojis[0].category === "Flags";


    if (isFlag === currentEmojiIsFlag) {
      console.log(isFlag, currentEmojiIsFlag)
      console.log(currentEmoji)
      setCorrectAnswers([...correctAnswers, currentEmoji]);

      let [first, ...remaining] = remainingEmojis;

      setRemainingEmojis(remaining);

    } else {
      playerLoses();
    }
  }

  function playerLoses() {
    alert("You lose. Sorry!")
    setCorrectAnswers([]);
    setRemainingEmojis(getRemainingEmojis());
    resetTimer();
  }


  function resetTimer() {
    setSeconds(60);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    }

    if (seconds === 0) {
      playerLoses();
    }

    if (!isActive) {
      clearInterval(interval);
      resetTimer()
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);



  return (
    <div className="App">
      <Instructions></Instructions>
      <GameWindow emoji={currentEmoji} handler={handleAnswer}></GameWindow>
      <ScoreTimer seconds={seconds}></ScoreTimer>
      <Answers answers={correctAnswers}></Answers>
    </div>
  )
}

export default App
