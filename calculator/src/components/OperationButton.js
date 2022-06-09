export default function OperationButton(props) {
  function UpdateOperation(operation) {
    let newScreen = {...props.screen};
    if (!newScreen.operation === null) {
      props.equalize()
    }
    newScreen.operation = operation;
    props.setScreen(newScreen);
  }

  return (<button onClick={() => UpdateOperation(props.operation)}>{props.operation}</button>)
}