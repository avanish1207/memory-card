import './Scoreboard.css';

function Scoreboard(){
    return(
        <div className='scoreboard'>
            <h3>Scoreboard</h3>
            <div className='cScore'>Current Score: </div>
            <div className='hScore'>Highest Score: </div>
        </div>
    );
}

export default Scoreboard;