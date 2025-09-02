import { useState } from 'react'
import './App.css';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

function App() {

  const [currentScore, setCurrentScore]=useState(0);

  function handleCardClick(){
    setCurrentScore(prevScore=>prevScore+1);
  }

  return(<div>
    <Scoreboard cScore={currentScore}/>
    <Gameboard cardClickHandler={handleCardClick}/>
  </div>);
}

export default App
