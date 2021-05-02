import { useState, useEffect } from 'react';
import Weather from './Weather';

function RealWeatherList() {
  // state where we can store the API results
  const [ weatherData, setWeatherData ] = useState([]);

  // run code once when the component first
  useEffect(() => {
    // fetch is JavaScript built-in way to call an API
    fetch("https://api.weather.gov/gridpoints/DTX/65,33/forecast")
    .then(res => res.json())
    .then(data => {
      // set the state using the API data
      // It's up to us to find the part of the JSON we need (an array).
      setWeatherData(data.properties.periods);
    });
  }, []);

  return (
    <section>
      <h2>Real Weather</h2>
      {/* in map, select the properties from the JSON to use */}
      {weatherData.map( data => 
        <Weather key={data.number}
                  time={data.name}
                  conditions={data.shortForecast}
                  tempF={data.temperature} /> )}
    </section>
  )
}

export default RealWeatherList;