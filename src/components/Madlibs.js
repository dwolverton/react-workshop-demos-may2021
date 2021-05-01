import { useState } from "react";

function Madlibs() {
  const [ adj, setAdj ] = useState("");
  const [ noun, setNoun ] = useState("");
  // TODO Add a state for the noun as well.
  const [ isShowStory, setShowStory ] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO The story div should initially not show, but submitting
    // the form shows the story.
    console.log("Do something with ...", adj, noun);
    setShowStory(true);
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
            value={noun}
            onChange={(e) => setNoun(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">Show Story</button>
        </p>
      </form>
      { isShowStory && <div className="Madlibs__story">
        <h3>Story</h3>
        <p>
          I ordered the <strong>{adj}</strong> fish, but all I got was this outrageous <strong>{noun}</strong>!
        </p>
      </div> }
    </div>
  );
}

export default Madlibs;