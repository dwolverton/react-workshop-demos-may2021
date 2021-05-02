import Weather from './Weather';

function FakeWeatherList() {
  const weatherData = [
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" }
  ];

  const weatherComponents = weatherData.map(data => 
    <Weather key={data.time} time={data.time} conditions={data.conditions} tempF={data.highF} /> );

  return (
    <section>
      <h2>Fake Weather</h2>
      {weatherComponents}
    </section>
  )
}

export default FakeWeatherList;