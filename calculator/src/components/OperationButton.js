export default function OperationButton(props) {
  function UpdateOperation(value) {
    let newScreen = {...props.screen};
    if (newScreen.operation === null) {
    newScreen.firstNumber = '' + newScreen.firstNumber + value;
    newScreen.firstNumber = Number(newScreen.firstNumber) 
  }
    if (!newScreen.operation === null) {
    newScreen.secondNumber = '' + newScreen.secondNumber + value;
    newScreen.secondNumber = Number(newScreen.secondNumber) 
    }
    props.setScreen(newScreen);
  }

  return (<button>{props.operation}</button>)
}