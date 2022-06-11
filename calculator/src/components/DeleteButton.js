export default function DeleteButton(props) {
  function Delete() {
    let newScreen = { ...props.screen };
    let firstString = newScreen.firstNumber.toString()
    let secondString = newScreen.secondNumber.toString()
    if (newScreen.operator === false) {
      if (newScreen.firstNumberDecimal === ".") {
        newScreen.firstNumberDecimal = "";
      }
      else if (firstString.indexOf(".") == -1) {
        newScreen.firstNumber = Math.floor(newScreen.firstNumber / 10);
      }
      else if (firstString.indexOf(".") > 0) {
        let length = firstString.length-1
        newScreen.firstNumber = firstString.substring(0, length)
        newScreen.firstNumber = Number(newScreen.firstNumber)
      }
    }

    if (!newScreen.operator === false) {
        if (!newScreen.secondNumber === false) {
      if (newScreen.secondNumberDecimal === ".") {
        newScreen.secondNumberDecimal = "";
      }
      else if (secondString.indexOf(".") == -1) {
        newScreen.secondNumber = Math.floor(newScreen.secondNumber / 10);
      }
      else if (secondString.indexOf(".") > 0) {
        let length = secondString.length-1
        newScreen.secondNumber = secondString.substring(0, length)
        newScreen.secondNumber = Number(newScreen.secondNumber)
      }
    } else {
        newScreen.operator = false
    }
}
    props.setScreen(newScreen);
  }

  return <button onClick={() => Delete()}>␡</button>;
}
