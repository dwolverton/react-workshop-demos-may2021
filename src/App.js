import './App.css';
import Counter from './components/Counter';
import Madlibs from './components/Madlibs';
import Switch from './components/Switch';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Weather time="Today" conditions="Overcast" tempF={65} />
      <Weather time="Tomorrow" conditions="Sunny" tempF={70} />
      <Madlibs />
      <Counter />
      <Switch />
      <Switch />
    </div>
  );
}

export default App;
