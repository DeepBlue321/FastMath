import { TextField } from "@mui/material";
import React, { useState } from "react";



function expResult(a, b, symb) {
  if (symb === "+") {
    return a + b;
  } else if (symb === "-") {
    return a - b;
  } else if (symb === "*") {
    return a * b;
  } else if (symb === "/") {
    return a / b;
  }
}

function Expression({ symbol }) {
  const [a, setA] = useState(20);
  const [b, setB] = useState(20);

  const [input, setInput] = useState("");

  function setRandom() {
    setA(Math.floor(Math.random() * 1000));
    setB(Math.floor(Math.random() * 1000));
  }

  function checkAnswer(val) {
    console.log(expResult(a, b, symbol));
    setInput(val);
    if (parseInt(val) === expResult(a, b, symbol)) {
      setRandom();
      setInput("");
    }
  }

  return (
    <div className="expr">
      <h1>
        {a} {symbol} {b}
      </h1>
      <TextField value={input} onChange={(e) => checkAnswer(e.target.value)} />
    </div>
  );
}

export default Expression;
