import './Card.css';

function Card({handleClick, cardId, cardName, cardSprite}){
    return(
        <div className='card' onClick={()=>handleClick(cardId)}>
            <img src={cardSprite} alt={cardName} />
        </div>
    );
}

export default Card;