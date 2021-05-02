import './Weather.css';

// props come in as an object parameter,
// which we destructure to get the individual props.
function Weather({time, conditions, tempF}) {
  // I like to do more complex JavaScript work before the return JSX.
  const tempC = Math.round( (tempF - 32) * 5 / 9 );

  return (
    <div className="Weather">
      <h3>Weather for {time}</h3>
      <p>{conditions}</p>
      <p>Temperature {tempF}F ({tempC}C)</p>
    </div>
  )
}

export default Weather