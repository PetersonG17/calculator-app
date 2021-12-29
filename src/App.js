//import Attribution from './components/Attribution';
import Display from './components/Display';
import Keypad from './components/Keypad';
import ToggleSwitch from './components/ToggleSwitch';

import "./App.css";

function App() {
  return (    
    <div className="container p-5">
      <div className="row">
        <div className="col-2 fs-1 text-white">
          Calculator
        </div>
        <div className="col-10 d-flex justify-content-end">
          <div className="d-flex flex-row align-items-end"> {/* Toggle Theme */}
            <div className="pe-3 text-white">
              THEME
            </div>
            <ToggleSwitch></ToggleSwitch>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <Display></Display>
      </div>
      <div className="row mt-3">
        <Keypad></Keypad>
      </div>
    </div>
  );
}

export default App;
