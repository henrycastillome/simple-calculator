import {
  useState,
  useRef,

} from "react";
import React from "react";
import "./App.css";

function App() {



  const inputRef = useRef(null);
  const [result, setResult] = useState("");
  const [numberRef, setNumberRef] = useState("0")




  const handleClick = (e) => {


    if ((result.slice(-1) === "+" && result !== "") || (result.slice(-1) === "-" && result !== "") || (result.slice(-1) === "*" && result !== "") || (result.slice(-1) === "/" && result !== ""))

      return; //avoing clicking in the same operator sign in a row


    //using if statement to the first value not print the sign at the beginning
    if (result === "") {
      setResult(result.concat(inputRef.current.value))
      setNumberRef(inputRef.current.value)
    }
    else {


      setResult(result.concat(e.target.name, inputRef.current.value))
      let res = result.concat(e.target.name, inputRef.current.value) // putting it in a variable to show the result in a second line
      setNumberRef(eval(res).toString()) //showing the result in a second line

    }


    // inputRef.current.value = inputRef.current.focus(); // clearing the input field 

  }


  const clear = () => {
    setResult("");
    setNumberRef(0);
    inputRef.current.value = inputRef.current.focus()


  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    }
    catch (err) {
      setResult("Error")
    }
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
