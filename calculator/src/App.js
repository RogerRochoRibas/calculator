import "./App.css";
import React from "react";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";
import { Screen } from "./components/Screen";

function App() {
  const [screen, setScreen] = React.useState({
    firstNumber: 0,
    secondNumber: 0,
    operator: false,
    firstNumberDecimal: '',
    secondNumberDecimal: '',
  });

  function calc(firstVal, secondVal, operator) {
      if (operator === "+") {
        return firstVal + secondVal;
      } else if (operator === "-") {
        return firstVal - secondVal;
      } else if (operator === "*") {
        return firstVal * secondVal;
      } else if (operator === "÷") {
        return firstVal / secondVal;
      }
    };

    function equalize() {
    let result = calc(screen.firstNumber,screen.secondNumber,screen.operator)
    let newScreen = {...screen};
    newScreen.firstNumber = result
    newScreen.secondNumber = 0
    newScreen.operator = false
    newScreen.firstNumberDecimal = ''
    newScreen.secondNumberDecimal = ''
    setScreen(newScreen);
    }
  

  function Clear() {
    let newScreen = {
      firstNumber: 0,
      secondNumber: 0,
      operator: false,
      firstNumberDecimal: '',
      secondNumberDecimal: '',
    }
    setScreen(newScreen);
  }

  return (
    <div className="App">
      <div className="calculator">
        <Screen screen={screen} calc={calc}/>
        <button>mc</button>
        <button>m+</button>
        <button>m-</button>
        <button>mr</button>
        <button onClick={() => Clear()}>C</button>
        <OperatorButton screen={screen} setScreen={setScreen} digit='÷' />
        <OperatorButton screen={screen} setScreen={setScreen} digit='*' />
        <button>␡</button>
        <DigitButton screen={screen} setScreen={setScreen} digit="7" />
        <DigitButton screen={screen} setScreen={setScreen} digit="8" />
        <DigitButton screen={screen} setScreen={setScreen} digit="9" />
        <OperatorButton screen={screen} setScreen={setScreen} digit='-' />
        <DigitButton screen={screen} setScreen={setScreen} digit="4" />
        <DigitButton screen={screen} setScreen={setScreen} digit="5" />
        <DigitButton screen={screen} setScreen={setScreen} digit="6" />
        <OperatorButton screen={screen} setScreen={setScreen} digit='+' />
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
