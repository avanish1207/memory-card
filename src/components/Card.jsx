import './Card.css';

function Card({handleClick, cardId, cardName}){
    return(
        <div className='card' onClick={()=>handleClick(cardId)}>
            <p>{cardName}</p>
        </div>
    );
}

export default Card;