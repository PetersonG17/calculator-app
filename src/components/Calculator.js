import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import ToggleSwitch from './ToggleSwitch';
import styles from './Calculator.module.css';

// TODO: Add Tests...
// TODO: Make sure mobile responsiveness works...
// TODO: Make the themes work...
// TODO: Ability to type using numpad...
function Calculator() {

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

    // Concatenate strings together for the number
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

    setDisplayValue(newHistory.join(''));
    setHistory(newHistory);
    setCurrentNumber(newNumber);
  }

  // TODO: Clean this up...
  function handleDelete() {
    let newHistory = [...history];

    // Remove the last entry from the history
    newHistory.pop();

    // Set the display to show the history
    let newDisplayValue = "No History";
    if(newHistory.length !== 0) {
      newDisplayValue = newHistory.reduce((prev, current) => {
        return prev + current;
      });
    }

    setDisplayValue(newDisplayValue);
    setHistory(newHistory)
    setCurrentNumber(null);
  }

  function handleOperation(event) {
    const key = event.target.innerText;

    // Update the history with the key
    let newHistory = [...history];
    newHistory.push(key);

    setDisplayValue(newHistory.join(''));
    setHistory(newHistory);
    setCurrentNumber(null);
  }

  function handleEquals() {

    // Perform all the operations
    let result = 0;
    for(let i = 0; i < history.length; i++) {

      if(OPERATIONS.includes(history[i])) {

        // TODO: Move these into methods. Polymorphism in Javascript???
        switch(history[i]) {
          case ADD:
            result = parseFloat(result) + parseFloat(defaultToZeroIfInvalid(history[i + 1]));
            break;
          case SUBTRACT:
            result = parseFloat(result) - parseFloat(defaultToZeroIfInvalid(history[i + 1]));
            break;
          case MULTIPLY:
            result = parseFloat(result) * parseFloat(defaultToZeroIfInvalid(history[i + 1]));
            break;
          case DIVIDE:
            result = parseFloat(result) / parseFloat(defaultToZeroIfInvalid(history[i + 1]));
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
  }

  function handleReset() {
    setDisplayValue(0.00);
    setHistory([]); // Clear the history
    setCurrentNumber(null);
  }

  function defaultToZeroIfInvalid(input) {
    return typeof input === 'undefined' || OPERATIONS.includes(input) ? 0 : input;
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className={styles['main-font-color'] + " col-2 fs-1"} data-theme="one">Calculator</div>
        <div className="col-10 d-flex justify-content-end">
          <div className="d-flex flex-row align-items-end">
            <div className={styles['main-font-color'] + " pe-3"} data-theme="one">THEME</div>
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
            onReset={() => handleReset}
        ></Keypad>
      </div>
    </div>
  );
}

export default Calculator;