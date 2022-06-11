export default function MemoryButton(props) {
  function UpdateMemory(memory) {
    if (memory === "mc") {
      let newScreen = { ...props.screen };
      newScreen.memory = "";
      props.setScreen(newScreen);
    }
    if (memory === "m+") {
      let newScreen = { ...props.screen };
      let result = props.calc(
        props.screen.firstNumber,
        props.screen.secondNumber,
        props.screen.operator
      );
      result = Number(result)
      let numberMemory = Number(newScreen.memory)
      newScreen.memory = numberMemory + result;
      props.setScreen(newScreen);
    }
    if (memory === "m-") {
      let newScreen = { ...props.screen };
      let result = props.calc(
        props.screen.firstNumber,
        props.screen.secondNumber,
        props.screen.operator
      );
      result = Number(result)
      let numberMemory = Number(newScreen.memory)
      newScreen.memory = numberMemory - result;
      props.setScreen(newScreen);
    }
    if (memory === "mr") {
      let newScreen = { ...props.screen };
      if (newScreen.operator === false) {
        newScreen.firstNumber = newScreen.memory;
        props.setScreen(newScreen);
      } else {
        newScreen.secondNumber = newScreen.memory;
        props.setScreen(newScreen);
      }
    }
  }
  return (
    <button className="memoryButton" onClick={() => UpdateMemory(props.memory)}>{props.memory}</button>
  );
}
