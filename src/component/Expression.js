import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Score from "./Score";
import { useParams, useNavigate } from "react-router-dom";
import Special from "./Special";
import { saveLocal, getLocal } from "./Local";
import Bar from "./Bar";

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
  let navigate = useNavigate();
  function stop() {
    saveLocal(score, symbols);
    navigate("/", { replace: true });
    console.log(score);
  }
  const { symbols } = useParams();
  let { aLength, bLength, symbol } = parseUrl(symbols);
  const { first, second } = RandomNumber(aLength, bLength, symbol);

  const [a, setA] = useState(first);
  const [b, setB] = useState(second);

  const [input, setInput] = useState("");

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(getLocal(symbols));

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
      setScore(score + 1);

      setInput("");
    }
  }

  return (
    <div className="expr">
      <Score score={score} highScore={highScore} />

      <Bar stop={stop} />
      {symbol !== "P" && symbol !== "s" ? (
        <Typography fontSize={"40px"}>
          {a} {symbol} {b}
        </Typography>
      ) : (
        <Special symbol={symbol} a={a} />
      )}
      <TextField
        autoComplete="false"
        autoFocus
        value={input}
        onChange={(e) => checkAnswer(e.target.value)}
      />
    </div>
  );
}

export default Expression;
