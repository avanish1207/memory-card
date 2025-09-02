import './Gameboard.css';
import Card from './Card';

function Gameboard(){
    return(
        <div className='gameboard'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    );
}

export default Gameboard;