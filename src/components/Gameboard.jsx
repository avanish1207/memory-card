import './Gameboard.css';
import Card from './Card';

function Gameboard({cardClickHandler}){
    return(
        <div className='gameboard'>
            <Card handleClick={cardClickHandler}></Card>
            <Card handleClick={cardClickHandler}></Card>
            <Card handleClick={cardClickHandler}></Card>
            <Card handleClick={cardClickHandler}></Card>
            <Card handleClick={cardClickHandler}></Card>
            <Card handleClick={cardClickHandler}></Card>
            <Card handleClick={cardClickHandler}></Card>
            <Card handleClick={cardClickHandler}></Card>
        </div>
    );
}

export default Gameboard;