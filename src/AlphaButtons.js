import React from 'react';

 /** generateButtons: return array of letter buttons to render */

class AlphaButtons extends React.Component{

  onClickHandler = (evt)=>{
    this.props.handleGuess(evt)
  }

  render(props){

     return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        value={ltr}
        key={ltr}
        onClick={this.onClickHandler}
         disabled={this.props.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }
}

export default AlphaButtons;
