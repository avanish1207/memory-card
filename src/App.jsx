import { useState } from 'react'
import './App.css';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

function App() {

  const [currentScore, setCurrentScore]=useState(0);
  const [clickedCards, setClickedCards]=useState([]);
  const [highScore, setHighScore]=useState(0);
  function handleCardClick(cardId){
    if(clickedCards.includes(cardId)){
      setCurrentScore(0)
      setClickedCards([]);
    } else{
      setClickedCards([...clickedCards, cardId]);
      const newScore=currentScore+1;
      setCurrentScore(newScore);
      if(newScore>highScore){
        setHighScore(newScore);
      }
    }
    
  }

  const array=Array.from({length:8},(_,index)=>({ //kinda weird way of creating an array(always forget it so copy paste)
    id: index+1,
    name: `Card ${index+1}`
  }));
  console.log(array);

  return(<div>
    <Scoreboard cScore={currentScore} hScore={highScore}/>
    <Gameboard cardClickHandler={handleCardClick} cardData={array}/>
  </div>);
}

export default App
