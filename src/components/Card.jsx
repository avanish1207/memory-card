function Card({handleClick, cardId, cardName, cardSprite}){
    return(
        <div className='card bg-black cursor-pointer' onClick={()=>handleClick(cardId)}>
            <img src={cardSprite} alt={cardName} />
        </div>
    );
}

export default Card;