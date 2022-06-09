import "./App.css";
import React from "react";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";
import Equal from "./components/Equal";
import { Screen } from "./components/Screen";

function App() {
  const [screen, setScreen] = React.useState({
    firstNumber: 0,
    secondNumber: 0,
    operation: false,
  });

  function equalize() {
    let newScreen = {...screen};
    if (screen.operation === '+') {
    newScreen.firstNumber = newScreen.firstNumber + newScreen.secondNumber;
    newScreen.secondNumber = 0
    newScreen.operation = false
  }
  if (screen.operation === '-') {
    newScreen.firstNumber = newScreen.firstNumber - newScreen.secondNumber;
    newScreen.secondNumber = 0
    newScreen.operation = false
  }
  if (screen.operation === '*') {
    newScreen.firstNumber = newScreen.firstNumber * newScreen.secondNumber;
    newScreen.secondNumber = 0
    newScreen.operation = false
  }
  if (screen.operation === '÷') {
    newScreen.firstNumber = newScreen.firstNumber / newScreen.secondNumber;
    newScreen.secondNumber = 0
    newScreen.operation = false
  }
    setScreen(newScreen);
    
  }

  return (
    <div className="App">
      <div className="calculator">
        <Screen screen={screen} />
        <button>mc</button>
        <button>m+</button>
        <button>m-</button>
        <button>mr</button>
        <button>C</button>
        <OperationButton screen={screen} setScreen={setScreen} equalize={equalize} operation="÷" />
        <OperationButton screen={screen} setScreen={setScreen} equalize={equalize} operation="*" />
        <button>␡</button>
        <DigitButton screen={screen} setScreen={setScreen} digit="7" />
        <DigitButton screen={screen} setScreen={setScreen} digit="8" />
        <DigitButton screen={screen} setScreen={setScreen} digit="9" />
        <OperationButton screen={screen} setScreen={setScreen} equalize={equalize} operation="-" />
        <DigitButton screen={screen} setScreen={setScreen} digit="4" />
        <DigitButton screen={screen} setScreen={setScreen} digit="5" />
        <DigitButton screen={screen} setScreen={setScreen} digit="6" />
        <OperationButton screen={screen} setScreen={setScreen} equalize={equalize} operation="+" />
        <DigitButton screen={screen} setScreen={setScreen} digit="1" />
        <DigitButton screen={screen} setScreen={setScreen} digit="2" />
        <DigitButton screen={screen} setScreen={setScreen} digit="3" />
        <button onClick={() => equalize()} className="bigButton">=</button>
        <button className="digitButton">%</button>
        <DigitButton screen={screen} setScreen={setScreen} digit="0" />
        <DigitButton screen={screen} setScreen={setScreen} digit="." />
      </div>
    </div>
  );
}

export default App;
