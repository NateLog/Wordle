import React from "react";

function GuessBar({ handleNewGuess, wonLost }) {
  const focusRef = React.useRef();
  const [word, setWord] = React.useState("");
  React.useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <div>
      <form
        class="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          handleNewGuess(word);
          setWord("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>

        <input
          required={true}
          ref={focusRef}
          type="text"
          className={"guess-input"}
          id="new-guess"
          value={wonLost === "onGoing" ? word : ""}
          onChange={(event) => setWord(event.target.value)}
        />
      </form>
    </div>
  );
}

export default GuessBar;
