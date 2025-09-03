import './Scoreboard.css';

function Scoreboard({cScore, hScore}){
    return(
        <div className='scoreboard'>
            <h3>Scoreboard</h3>
            <div className='cScore'>Current Score: {cScore}</div>
            <div className='hScore'>Highest Score: {hScore}</div>
        </div>
    );
}

export default Scoreboard;