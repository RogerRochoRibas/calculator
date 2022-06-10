export default function DigitButton(props) {
  function UpdateNumber(value) {
    let newScreen = { ...props.screen };
    if (newScreen.operator === false) {
      if (newScreen.firstNumberDecimal === ".") {
        newScreen.firstNumber = newScreen.firstNumber + "." + value;
        newScreen.firstNumberDecimal = "";
        newScreen.firstNumber = Number(newScreen.firstNumber)
      } else {
        newScreen.firstNumber = newScreen.firstNumber + value;
        newScreen.firstNumber = Number(newScreen.firstNumber);
        if (props.digit === ".") {
          newScreen.firstNumberDecimal = ".";
        }
      }
    }
    if (!newScreen.operator === false) {
      if (newScreen.secondNumberDecimal === ".") {
        newScreen.secondNumber = newScreen.secondNumber + "." + value;
        newScreen.secondNumberDecimal = "";
        newScreen.secondNumber = Number(newScreen.secondNumber)
      } else {
        newScreen.secondNumber = newScreen.secondNumber + value;
        newScreen.secondNumber = Number(newScreen.secondNumber);
        if (props.digit === ".") {
          newScreen.secondNumberDecimal = ".";
        }
      }
    }
    props.setScreen(newScreen);
  }

  return (
    <button className="digitButton" onClick={() => UpdateNumber(props.digit)}>
      {props.digit}
    </button>
  );
}
