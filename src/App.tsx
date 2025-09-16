import { useEffect,useState } from 'react'
import { shuffle } from 'lodash';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Scoreboard';

interface Pokemon{
  id: number;
  name: string;
  sprite: string;
}

function App() {

  const [array, setArray]=useState<Pokemon[]>([]);
  const [pokeSprites, setPokeSprites]=useState<Pokemon[]>([]);
  const pokeIds: number[]=[1, 4, 7, 10, 13, 16, 19, 25, 30, 35, 40, 45];
  useEffect(()=>{
    async function getPokemon() {
    try {
      const promises=pokeIds.map(pokeId=>fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then(response=>response.json()));
      const results=await Promise.all(promises);
      const sprites: Pokemon[]=results.map(data=>({
        id:data.id,
        name:data.name,
        sprite:data.sprites.front_default
      }));
      setPokeSprites(sprites);
      setArray(sprites);
      console.log(pokeSprites.length);
    }catch(error){
      console.log(`Error: ${error}`);
    }
  }
  getPokemon();
  },[]);
  const [currentScore, setCurrentScore]=useState<number>(0);
  const [clickedCards, setClickedCards]=useState<number[]>([]);
  const [highScore, setHighScore]=useState<number>(0);

  function handleCardClick(cardId: number): void{
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
    setArray(prevArray=>shuffle(prevArray));
  }

  return(<div className='game flex flex-col gap-5'>
    <Scoreboard cScore={currentScore} hScore={highScore}/>
    <Gameboard cardClickHandler={handleCardClick} cardData={array}/>
  </div>);
}

export default App
