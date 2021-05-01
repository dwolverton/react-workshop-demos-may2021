import './App.css';
import Counter from './components/Counter';
import Madlibs from './components/Madlibs';
import Switch from './components/Switch';

function App() {
  return (
    <div className="App">
      {/* <Madlibs /> */}
      <Counter />
      <Switch />
      <Switch />
    </div>
  );
}

export default App;
