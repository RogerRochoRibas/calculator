export function Screen(props) {
  
  return (
    <div className="screen">
      <div className="calculation">
        <span className="firstNum">{props.screen.firstNumber}{props.screen.firstNumberDecimal}</span>
        <span className="operator">{props.screen.operator}</span>
        <span className="secondNum">{props.screen.secondNumber}{props.screen.secondNumberDecimal}</span>
      </div>
      <div className="predict">{props.calc(props.screen.firstNumber,props.screen.secondNumber,props.screen.operator)}</div>
    </div>
  );
}
