import React from 'react';

const EndGame = (props) => {
  const {win,handleRestart,answer} = props;
  return (<div className="EndGame">
    {win ?
    <span>
      <h2>🎉🎉🎉💥You Win💥🎉🎉🎉</h2>
    </span>
    :
    <span>
      <h2>GAME OVER</h2>
      <p> answer: {answer}</p>
    </span>}
    </div>);
}

export default EndGame;
