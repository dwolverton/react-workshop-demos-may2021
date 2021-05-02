import './App.css';
import Counter from './components/Counter';
import Madlibs from './components/Madlibs';
import Quote from './components/Quote';
import Switch from './components/Switch';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Quote text="It always seems impossible until it's done."
             author="Nelson Mandela" date="2011" />
      <Quote text="What's up, doc?"
             author="Bugs Bunny" />
      {/* Pass in values of props like HTML attributes */}
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
