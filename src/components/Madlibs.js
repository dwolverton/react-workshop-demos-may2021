import { useState } from "react";

function Madlibs() {
  const [ adj, setAdj ] = useState("");
  // TODO Add a state for the noun as well.

  function handleSubmit(e) {
    e.preventDefault();
    // TODO The story div should initially not show, but submitting
    // the form shows the story.
  }

  return (
    <div className="Madlibs">
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="Madlibs__adj">Adj: </label>
          <input
            id="Madlibs__adj"
            value={adj}
            onChange={(e) => setAdj(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="Madlibs__noun">Noun: </label>
          <input
            id="Madlibs__noun"
          />
        </p>
        <p>
          <button type="submit">Show Story</button>
        </p>
      </form>
      <div className="Madlibs__story">
        <h3>Story</h3>
        <p>
          I ordered the {adj} fish, but all I got was this outrageous ___!
        </p>
      </div>
    </div>
  );
}

export default Madlibs;