import Address from './Address.js';
import Calculator from './Calculator.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        Star are Awesome!
      </p>
      <Address name="Naomi Stephenson" planet="Earth" galaxy="Milky Way" />
      <Address name="Doctor Who" planet="Galafray" galaxy="?" />
      <Address name="Goofy" planet="Pluto" galaxy="Milky Way" />
      <Address name="Teal'c" planet="Chulak" galaxy="Andromeda" />
    </div>
  );
}

export default App;
