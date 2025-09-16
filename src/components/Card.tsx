interface Cards{
    cardId: number;
    cardName: string;
    cardSprite: string;
    handleClick: any;
}

function Card({handleClick, cardId, cardName, cardSprite}: Cards){
    return(
        <div className='card flex justify-center bg-black cursor-pointer border-5 border-violet-500 hover:border-red-500' onClick={()=>handleClick(cardId)}>
            <img src={cardSprite} alt={cardName} className="w-30 h-30"/>
        </div>
    );
}

export default Card;