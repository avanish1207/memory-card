import './Gameboard.css';
import Card from './Card';

function Gameboard({cardClickHandler, cardData}){
    return(
        <div className='gameboard'>
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