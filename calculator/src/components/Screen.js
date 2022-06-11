export default function Screen(props) {
  return (
    <div className="screen">
      <div className="calculation">
        <FirstNumber screen={props.screen} />
        <Operator screen={props.screen} />
        <SecondNum screen={props.screen} />
        <Predict screen={props.screen} calc={props.calc} />
        <Memory screen={props.screen} />
      </div>
    </div>
  );
}

function FirstNumber(props) {
  return (
    <span className="firstNum">
      {props.screen.firstNumber}
      {props.screen.firstNumberDecimal}
    </span>
  );
}

function Operator(props) {
  return <span className="operator">{props.screen.operator}</span>;
}

function SecondNum(props) {
  if (props.screen.secondNumber) {
  return (
    <span className="secondNum">
      {props.screen.secondNumber}
      {props.screen.secondNumberDecimal}
    </span>
  );} else return ''
}

function Predict(props) {
  if (props.screen.secondNumber) {
  return (
    <div className="predict">
      {props.calc(
        props.screen.firstNumber,
        props.screen.secondNumber,
        props.screen.operator
      )}
    </div>
  );} else return ''
}

function Memory(props) {
  if (props.screen.memory) {
    return (
      <div className="memoryScreen">{props.screen.memory}</div>
    )
  }
}