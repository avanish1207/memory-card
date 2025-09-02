// import { useState } from 'react'
import './App.css';
import Card from './components/Card';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

function App() {
  return(<div>
    <Scoreboard />
    <Gameboard />
  </div>);
}

export default App
