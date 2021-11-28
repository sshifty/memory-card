
const ScoreDisplayer=props=>{
    const {currentScore,maxScore}=props.state;
    return(
        <div className="score-displayer">
            <div className="score-container">
                <h4>Current Score: {currentScore}</h4>
            </div>
            <div className="score-container">
                <h4>Max Score: {maxScore}</h4>
            </div>
        </div>
    );
};

export default ScoreDisplayer;