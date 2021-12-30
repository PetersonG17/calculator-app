import React, { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import ToggleSwitch from './components/ToggleSwitch';
import "./App.css";

function App() {

  const [displayValue, setDisplayValue] = useState(0.00);
  const [history, setHistory] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);

  // TODO: Clean this up...
  function handleGeneric(event) {
    const key = event.target.innerText;

    // Concatinate strings together for the number
    let newNumber = null;
    console.log(currentNumber, key);
    if(currentNumber === null) {
      newNumber = key.toString();
    } else {
      newNumber = currentNumber.toString() + key.toString();
    }

    setCurrentNumber(newNumber);
    setDisplayValue(newNumber);
  }

  // TODO: Clean this up...
  function handleDelete() {
    let newHistory = [...history];

    // Remove the last entry from the history
    newHistory.pop();
    let newDisplayValue = 0.00;

    setDisplayValue(newDisplayValue);
    setHistory(newHistory)
    setCurrentNumber(null);
  }

  function handleOperation(event) {
    console.log(event.target.innerText);
    const key = event.target.innerText;
    let newHistory = [...history];

    // push the number and the key in order
    newHistory.push(currentNumber);
    newHistory.push(key);

    setDisplayValue(0.00);
    setHistory(newHistory);
    setCurrentNumber(null);
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
        <Keypad 
          onGeneric={() => handleGeneric} 
          onDelete={() => handleDelete}
          onOperation={() => handleOperation}
        ></Keypad>
      </div>
    </div>
  );
}

export default App;
