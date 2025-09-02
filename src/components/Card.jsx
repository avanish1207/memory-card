import './Card.css';

function Card({handleClick}){
    return(
        <div className='card' onClick={handleClick}>
            <p>Card</p>
        </div>
    );
}

export default Card;