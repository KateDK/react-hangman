import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import {randomWord} from './words';
import AlphaButtons from './AlphaButtons';
import EndGame from './EndGame';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  state = { nWrong: 0, guessed: new Set(), answer: randomWord()
  };

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord = () => {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess = (evt) => {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }
  handleRestart = () => {
    this.restart();
  }

  gameEnd = () => {
    const {nWrong,answer} = this.state;
    const {maxWrong} = this.props;
    return (this.guessedWord().join('') === answer) || nWrong === maxWrong
  }

  restart = () => {
    this.setState({nWrong: 0, guessed: new Set(), answer: randomWord() })
  }

  /** render: render game */
  render() {
    const {nWrong,answer,guessed} = this.state;
    const {maxWrong} = this.props;
    const endGame = this.gameEnd();
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[nWrong]} alt={`${nWrong} out of ${maxWrong} guesses`} />

        <p>Wrong guesses: {nWrong}</p>

        <p className='Hangman-word'>{this.guessedWord()}</p>
        {
          endGame?
          <EndGame win={this.guessedWord().join('') === answer} handleRestart={this.handleRestart} answer={answer}/>
          :
        <AlphaButtons guessed={guessed} handleGuess={this.handleGuess}/>
        }

      </div>
    );
  }
}

export default Hangman;
