export default function Screen(props) {
  return (
    <div className="screen">
      <div className="calculation">
        <Memory screen={props.screen} />
        <FirstNumber screen={props.screen} />
        <Operator screen={props.screen} />
        <SecondNum screen={props.screen} />
        <Predict screen={props.screen} calc={props.calc} />
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
  );} else return (
    <span className="secondNum">
    </span>)
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
  );} else return (
    <div className="predict">
    </div>
  )
}

function Memory(props) {
  if (props.screen.memory) {
    return (
      <div className="memoryScreen">M {props.screen.memory}</div>
    )
  }
}