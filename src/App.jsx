import { useState } from 'react'
import './App.css';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

function App() {

  const [currentScore, setCurrentScore]=useState(0);
  const [clickedCards, setClickedCards]=useState([]);
  function handleCardClick(cardId){
    if(clickedCards.includes(cardId)){
      setCurrentScore(0)
      setClickedCards([]);
    } else{
      setClickedCards([...clickedCards, cardId]);
      setCurrentScore(prevScore=>prevScore+1);
    }
  }

  const array=Array.from({length:8},(_,index)=>({ //kinda weird way of creating an array(always forget it so copy paste)
    id: index+1,
    name: `Card ${index+1}`
  }));
  console.log(array);

  return(<div>
    <Scoreboard cScore={currentScore}/>
    <Gameboard cardClickHandler={handleCardClick} cardData={array}/>
  </div>);
}

export default App
