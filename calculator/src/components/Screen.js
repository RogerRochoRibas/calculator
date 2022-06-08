export function Screen(props) {
  return (
    <div className="screen">
      <div className="current-number">
        {props.screen.secondNumber} {props.screen.operation}
      </div>
      <div className="operation">{props.screen.firstNumber}</div>
    </div>
  );
}
