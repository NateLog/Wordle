import React from "react";
import { range } from "../../utils";

function Fillup({ guessList, maxGuesses }) {
  const emptyGuess = [
    {
      letter: "",
      status: "empty",
      id: Math.random(),
    },
    {
      letter: "",
      status: "empty",
      id: Math.random(),
    },
    {
      letter: "",
      status: "empty",
      id: Math.random(),
    },
    {
      letter: "",
      status: "empty",
      id: Math.random(),
    },
    {
      letter: "",
      status: "empty",
      id: Math.random(),
    },
  ];
  let filledup = range(maxGuesses).map(function (item, index, array) {
    return guessList[index] == null
      ? (array = emptyGuess)
      : (array = guessList[index]);
  });
  return filledup;
}

export function GuessRow({ row }) {
  const nextRow = row.map((letters, index) => (
    <span
      key={letters.id}
      className={
        letters.status === "correct"
          ? "cell correct"
          : letters.status === "incorrect"
          ? "cell incorrect"
          : letters.status === "misplaced"
          ? "cell misplaced"
          : "cell"
      }
    >
      {letters.letter}
    </span>
  ));

  return nextRow;
}

export function GuessGrid({ guessList, maxGuesses }) {
  const filledGuessList = Fillup({ guessList, maxGuesses });

  return (
    <div class="guess-results">
      {filledGuessList.map((rows, index) => (
        <p key={index} className="guess">
          <GuessRow row={rows} />
        </p>
      ))}
    </div>
  );
}

export default GuessGrid;
