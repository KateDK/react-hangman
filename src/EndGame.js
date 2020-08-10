import React from 'react';

const EndGame = (props) => {
  const {win,handleRestart,answer} = props;
  return (<div>
    {win ?
    <span>
      <p>🎉🎉🎉 Great Job! You Win!!! 🎉🎉🎉</p>
    </span>
    :
    <span>
      <p>GAME OVER</p>
      <p> answer: {answer}</p>
    </span>}
    <button onClick={handleRestart}>Restart</button>
    </div>);
}

export default EndGame;
