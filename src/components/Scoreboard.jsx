import './Scoreboard.css';

function Scoreboard({cScore}){
    return(
        <div className='scoreboard'>
            <h3>Scoreboard</h3>
            <div className='cScore'>Current Score: {cScore}</div>
            <div className='hScore'>Highest Score: </div>
        </div>
    );
}

export default Scoreboard;