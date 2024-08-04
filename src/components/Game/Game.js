import React from "react";
import GuessBar from "../GuessBar";
import GuessGrid from "../GuessGrid";
import Banner from "../Banner";
//import styles from "../../styles.css"

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [wonLost, setWonLost] = React.useState("onGoing");

  console.log("second commit from VS");

  function HandleNewGuess(newWord) {
    const checkedResult = checkGuess(newWord, answer);

    let numCorrectLetters = checkedResult.filter(
      (word) => word.status === "correct"
    ).length;

    let checkWonLost =
      numCorrectLetters === 5
        ? "won"
        : guessList.length >= 5
        ? "lost"
        : "onGoing";

    const incorrectEntryMessage =
      newWord.length < 5 || newWord.length > 5
        ? "Please enter a 5 letter word"
        : null;

    incorrectEntryMessage && window.alert(incorrectEntryMessage);
    if (!incorrectEntryMessage) {
      const newList = [...guessList, checkedResult];
      setGuessList(newList);
      setWonLost(checkWonLost);
    }
  }
  return (
    <div class="game-wrapper">
      <GuessGrid guessList={guessList} maxGuesses={NUM_OF_GUESSES_ALLOWED} />
      <GuessBar handleNewGuess={HandleNewGuess} wonLost={wonLost} />
      <Banner
        wonLost={wonLost}
        guessListLength={guessList.length}
        answer={answer}
      />
    </div>
  );
}

export default Game;
