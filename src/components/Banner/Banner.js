import React from "react";

function Banner({ wonLost, guessListLength, answer }) {
  return (
    <div
      className={
        wonLost === "won"
          ? "happy banner"
          : wonLost === "lost"
          ? "sad banner"
          : "visually-hidden"
      }
    >
      {wonLost === "won" && (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{guessListLength}</strong>
        </p>
      )}
      {wonLost === "lost" && (
        <p>
          Bad luck, the correct answer was: <strong>{answer}</strong>
        </p>
      )}
    </div>
  );
}

export default Banner;
