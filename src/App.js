import React, { useState } from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import ToggleSwitch from './components/ToggleSwitch';
import "./App.css";

function App() {

  const [displayValue, setDisplayValue] = useState(0.00);
  const [history, setHistory] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);

  // Operations
  const SUBTRACT = "-";
  const ADD = "+";
  const MULTIPLY = "x";
  const DIVIDE = "/";

  const OPERATIONS = [SUBTRACT, ADD, MULTIPLY, DIVIDE];

  // TODO: Clean this up...
  function handleGeneric(event) {
    const key = event.target.innerText;

    // Concatinate strings together for the number
    let newNumber = null;
    if(currentNumber === null) {
      newNumber = key.toString();
    } else {
      newNumber = currentNumber.toString() + key.toString();
    }

    // Update the history with the new number
    let newHistory = [...history];
    if(currentNumber === null) { // If this is a new keypress then add to the array
      newHistory.push(newNumber);
    } else { // If this is concatinating the current number then just replace the last number on the array
      newHistory[newHistory.length - 1] = newNumber;
    }

    setHistory(newHistory);
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
    const key = event.target.innerText;

    // Update the history with the key
    let newHistory = [...history];
    newHistory.push(key);

    // TODO: Display previous something different....
    setDisplayValue(0.00);
    setHistory(newHistory);
    setCurrentNumber(null);
  }

  // TODO: Finish this...
  function handleEquals(event) {

    // Perform all the operations
    let result = 0;
    for(let i = 0; i < history.length; i++) {
      if(OPERATIONS.includes(history[i])) {
        switch(history[i]) {
          case ADD:
            // TODO: Implement this...
            result = parseFloat(result) + parseFloat(defaultToZeroIfNotDefined(history[i + 1]));
            break;
          case SUBTRACT:
            // TODO: Implement this...
            break;
          case MULTIPLY:
            // TODO: Implement this...
            break;
          case DIVIDE:
            // TODO: Implement this...
            break;
          default:
            console.log(`Error! No operation defined for ${history[i]}`);
            break;
        }
      } else {
        // If on the first iteration, set the result to the first number in the history array
        if(i === 0) {
          result = history[i];
        }
      }
    }

    // Display the result...
    setDisplayValue(result)
    // TODO: Take care of the history?
  }

  function defaultToZeroIfNotDefined(variable) {
    return typeof variable === 'undefined' ? 0 : variable;
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
          onEquals={() => handleEquals}
        ></Keypad>
      </div>
    </div>
  );
}

export default App;
