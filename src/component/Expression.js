import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Special from "./Special";

function roudToThree(num) {
  return +(Math.round(num + "e+3") + "e-3");
}

function expResult(a, b, symb) {
  if (symb === "+") {
    return a + b;
  } else if (symb === "-") {
    return a - b;
  } else if (symb === "*" || symb === "P") {
    return a * b;
  } else if (symb === "/") {
    return roudToThree(a / b);
  } else if (symb === "s") {
    return roudToThree(Math.sqrt(a));
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
function RandomNumber(lenA, lenB, symbol) {
  let a = Math.floor(Math.random() * Math.pow(10, lenA)) + 1;
  if (symbol === "P" || symbol === "s") {
    return {
      first: a,
      second: a,
    };
  }
  let b = Math.floor(Math.random() * Math.pow(10, lenB)) + 1;
  return { first: Math.max(a, b), second: Math.min(a, b) };
}

function Expression() {
  const { symbols } = useParams();
  let { aLength, bLength, symbol } = parseUrl(symbols);
  const { first, second } = RandomNumber(aLength, bLength, symbol);

  const [a, setA] = useState(first);
  const [b, setB] = useState(second);

  const [input, setInput] = useState("");

  function setRandom() {
    const { first, second } = RandomNumber(aLength, bLength);
    setA(first);
    setB(second);
  }

  function checkAnswer(val) {
    console.log(expResult(a, b, symbol));
    console.log(parseFloat(val));
    setInput(val);
    if (Math.abs(parseFloat(val) - expResult(a, b, symbol)) < 0.0000001) {
      setRandom();

      setInput("");
    }
  }

  return (
    <div className="expr">
      {symbol !== "P" && symbol !== "s" ? (
        <h1>
          {a}
          {symbol} {b}
        </h1>
      ) : (
        <Special symbol={symbol} a={a} />
      )}
      <TextField value={input} onChange={(e) => checkAnswer(e.target.value)} />
    </div>
  );
}

export default Expression;
