// import './Gameboard.css';
import Card from './Card';

interface Pokemon{
  id: number;
  name: string;
  sprite: string;
}

interface Game{
    cardClickHandler: any;
    cardData: Pokemon[];
}

function Gameboard({cardClickHandler, cardData}:Game){
    return(
        <div className='gameboard m-1 grid grid-cols-4'>
            {
                cardData.map(card=>(
                    <Card 
                    key={card.id}
                    cardId={card.id}
                    cardName={card.name}
                    cardSprite={card.sprite}
                    handleClick={cardClickHandler}
                    />
                ))
            }
        </div>
    );
}

export default Gameboard;