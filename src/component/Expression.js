import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Score from "./Score";

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

  const [score, setScore] = useState(0);

  function setRandom() {
    setA(Math.floor(Math.random() * 1000));
    setB(Math.floor(Math.random() * 1000));
  }

  function checkAnswer(val) {
    console.log(expResult(a, b, symbol));
    setInput(val);
    if (parseInt(val) === expResult(a, b, symbol)) {
      setScore(score + 1);
      setRandom();
      setInput("");
    }
  }

  return (
    <div className="expr">
      <Score score={score} />
      <Typography fontSize={"40px"}>
        {a} {symbol} {b}
      </Typography>
      <TextField value={input} onChange={(e) => checkAnswer(e.target.value)} />
    </div>
  );
}

export default Expression;
