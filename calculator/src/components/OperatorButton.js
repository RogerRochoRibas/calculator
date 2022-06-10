export default function OperatorButton(props) {
  function UpdateOperator(operator) { 
    let newScreen = {...props.screen};
    newScreen.operator = operator;
    props.setScreen(newScreen); 
  }

  return (<button onClick={() => UpdateOperator(props.digit)}>{props.digit}</button>)
}