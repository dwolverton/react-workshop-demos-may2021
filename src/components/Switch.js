import { useState } from "react";
import "./Switch.css";

function Switch() {
  const [ on, setOn ] = useState(false);

  let classes;
  if (on) {
    classes = "Switch Switch--on";
  } else {
    classes = "Switch";
  }

  return (
    <div className={classes}>
      <h3>Switch</h3>
      <p>{ on ? "ON" : "OFF" }</p>
      <p>
        <button type="button" onClick={() => setOn(true)}>On</button>
        <button type="button" onClick={() => setOn(false)}>Off</button>
      </p>
    </div>
  );
}

export default Switch;