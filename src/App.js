import "./App.css";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const value = useSelector((state) => state);
  console.log(typeof value.calculatReudcer);
  const dispatch = useDispatch();
  let result = value.calculatReudcer;
  const clickHandler = (event) => {
    dispatch({ type: "update", payload: event.target.name });
  };
  const clear = () => {
    dispatch({ type: "clear" });
  };
  const backspace = () => {
    dispatch({ type: "backspace" });
  };
  const calculate = () => {
    dispatch({ type: "calculate", payload: result });
  };
  return (
    <main className="section">
      <div className="title">
        <h1>Calculator APP</h1>
      </div>
      <div className="container">
        <div className="calc-body">
          <form>
            <input type="text" value={result} />
          </form>
          <div className="keypad">
            <button className="highlight" onClick={clear} id="clear">
              Clear
            </button>
            <button className="highlight" onClick={backspace} id="backspace">
              C
            </button>
            <button className="highlight" name="/" onClick={clickHandler}>
              &divide;
            </button>
            <button name="7" onClick={clickHandler}>
              7
            </button>
            <button name="8" onClick={clickHandler}>
              8
            </button>
            <button name="9" onClick={clickHandler}>
              9
            </button>
            <button className="highlight" name="*" onClick={clickHandler}>
              &times;
            </button>
            <button name="4" onClick={clickHandler}>
              4
            </button>
            <button name="5" onClick={clickHandler}>
              5
            </button>
            <button name="6" onClick={clickHandler}>
              6
            </button>
            <button className="highlight" name="-" onClick={clickHandler}>
              &ndash;
            </button>
            <button name="1" onClick={clickHandler}>
              1
            </button>
            <button name="2" onClick={clickHandler}>
              2
            </button>
            <button name="3" onClick={clickHandler}>
              3
            </button>
            <button className="highlight" name="+" onClick={clickHandler}>
              +
            </button>
            <button name="0" onClick={clickHandler}>
              0
            </button>
            <button name="." onClick={clickHandler}>
              .
            </button>
            <button className="highlight" id="result" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
