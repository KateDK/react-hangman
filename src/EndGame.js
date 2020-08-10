import React from 'react';
import './EndGame.css';

const EndGame = (props) => {
  const {win,handleRestart,answer} = props;
  return (<div className="EndGame">
    {win ?
    <span>
      <h2>🎉🎉🎉 Great Job! You Win!!! 🎉🎉🎉</h2>
    </span>
    :
    <span>
      <h2>GAME OVER</h2>
      <p> answer: {answer}</p>
    </span>}
    <button onClick={handleRestart}>Restart</button>
    </div>);
}

export default EndGame;
