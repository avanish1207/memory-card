interface Scores{
    cScore: number;
    hScore: number;
}

function Scoreboard({cScore, hScore}: Scores){
    return(
        <div className='scoreboard text-white flex flex-col p-1'>
            <h2 className="flex justify-center text-xl">Scoreboard</h2>
            <div className='cScore flex justify-center'>Current Score: {cScore}</div>
            <div className='hScore flex justify-center'>Highest Score: {hScore}</div>
        </div>
    );
}

export default Scoreboard;