import "./App.css";
import React from "react";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";
import MemoryButton from "./components/MemoryButton";
import Screen from "./components/Screen";
import DeleteButton from "./components/DeleteButton";

function App() {
  const [screen, setScreen] = React.useState({
    firstNumber: 0,
    secondNumber: 0,
    operator: false,
    firstNumberDecimal: '',
    secondNumberDecimal: '',
    memory: '',
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
      } else if (operator === "%") {
        return firstVal * secondVal / 100;
      } else if (operator === false) {
        return firstVal
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
      memory: screen.memory
    }
    setScreen(newScreen);
  }

  return (
    <div className="App">
      <div className="calculator">
        <Screen screen={screen} calc={calc}/>
        <MemoryButton screen={screen} setScreen={setScreen} calc={calc} memory='mc' />
        <MemoryButton screen={screen} setScreen={setScreen} calc={calc} memory='m+' />
        <MemoryButton screen={screen} setScreen={setScreen} calc={calc} memory='m-' />
        <MemoryButton screen={screen} setScreen={setScreen} calc={calc} memory='mr' />
        <button onClick={() => Clear()}>C</button>
        <OperatorButton screen={screen} setScreen={setScreen} digit='÷' />
        <OperatorButton screen={screen} setScreen={setScreen} digit='*' />
        <DeleteButton screen={screen} setScreen={setScreen} />
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
        <OperatorButton screen={screen} setScreen={setScreen} digit='%' />
        <DigitButton screen={screen} setScreen={setScreen} digit="0" />
        <DigitButton screen={screen} setScreen={setScreen} digit="." />
      </div>
    </div>
  );
}

export default App;
