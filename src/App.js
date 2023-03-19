import {
  useState,
  useRef,

} from "react";
import React from "react";
import "./App.css";
import * as math from 'mathjs';

function App() {



  const inputRef = useRef(null);
  const [result, setResult] = useState("");
  const [numberRef, setNumberRef] = useState("0")




  const validInputRegex = /^[\d+\-*/().]*$/;

const handleClick = (e) => {
  const input = inputRef.current.value;
  if (!validInputRegex.test(input)) {
    alert("Invalid input");
    return;
  }

  if ((result.slice(-1) === "+" && result !== "") || (result.slice(-1) === "-" && result !== "") || (result.slice(-1) === "*" && result !== "") || (result.slice(-1) === "/" && result !== "")) {
    return; // Avoid clicking the same operator sign in a row
  }

  // Use if statement to prevent the first value from printing the sign at the beginning
  if (result === "") {
    setResult(result.concat(input));
    setNumberRef(input);
  } else {
    setResult(result.concat(e.target.name, input));
    let res = result.concat(e.target.name, input); // Store the result in a variable to show the result in a second line
    setNumberRef(math.evaluate(res).toString()); // Show the result in a second line
  }
};


  const clear = () => {
    setResult("");
    setNumberRef(0);
    if(inputRef.current){
    inputRef.current.value = "";
    inputRef.current.focus();
    }


  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }



  return (

    <div className="container">
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form>
        <h2>{result}</h2>

        <p>Result={numberRef}</p>
        <input type="number" id="num" placeholder="enter a number" ref={inputRef} />
      </form>


      <div className="Buttons">
        <button name="+" onClick={handleClick}>Add</button>
        <button name="-" onClick={handleClick}>Substract</button>
        <button name="*" onClick={handleClick}>Multiply</button>
        <button name="/" onClick={handleClick}>Divide</button>
        {/* <button onClick={calculate}>Result</button> */}
        <button name="+" onClick={backspace}>Backspace</button>
        <button onClick={clear}>Reset</button>

      </div>
    </div>
  )













}


export default App
