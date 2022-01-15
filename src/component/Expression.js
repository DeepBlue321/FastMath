import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

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

function parseUrl(url) {
  const input = url.split("");
  if (input[0] === "p") {
    input[0] = "+";
  } else if (input[0] === "m") {
    input[0] = "-";
  } else if (input[0] === "M") {
    input[0] = "*";
  } else if (input[0] === "d") {
    input[0] = "/";
  }

  return {
    symbol: input[0],
    aLength: input[1],
    bLength: input[2],
  };
}
function RandomNumber(len) {
  return Math.floor(Math.random() * Math.pow(10, len)) + 1;
}

function Expression() {
  const { symbols } = useParams();
  let { aLength, bLength, symbol } = parseUrl(symbols);

  const [a, setA] = useState(RandomNumber(aLength));
  const [b, setB] = useState(RandomNumber(bLength));

  const [input, setInput] = useState("");

  function setRandom() {
    setA(RandomNumber(aLength));
    setB(RandomNumber(bLength));
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
        {a}
        {symbol} {b}
      </h1>
      <TextField value={input} onChange={(e) => checkAnswer(e.target.value)} />
    </div>
  );
}

export default Expression;
