import React, { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import ToggleSwitch from './components/ToggleSwitch';
import "./App.css";

function App() {

  const [displayValue, setDisplayValue] = useState(0.00);
  const [history, setHistory] = useState([]);

  const specialKeys = ['/', '-', '+', 'x', '=', 'DEL', 'RESET', '.'];

  function handleKeyPress(event) {
    const key = event.target.innetText;

    // TODO: Finish this....
    if(!specialKeys.includes(key)) {
      setDisplayValue(event.target.innerText);
    }
  }

  // TODO: Finish this....
  function handleDelete(event) {
    let newHistory = [...history];
    let newDisplayValue = newHistory.pop();
    setDisplayValue(newDisplayValue);
    setHistory(newHistory)
  }

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
        <Display displayValue={displayValue}></Display>
      </div>
      <div className="row mt-3">
        {/* TODO: Need to pass the delete method to the correct key... */}
        <Keypad onKeyPress={() => handleKeyPress} onDelete={() => handleDelete}></Keypad>
      </div>
    </div>
  );
}

export default App;
