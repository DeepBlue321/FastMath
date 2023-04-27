import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Score from "../component/Score";
import { useParams, useNavigate } from "react-router-dom";
import Special from "../component/Special";
import { setHighScore } from "../utils/localScore";
import Bar from "../component/Bar";
import { getRandomNumbers } from "../utils/getRandomNumbers";

function roundToThree(num) {
  return +(Math.round(num + "e+3") + "e-3");
}

function calculateResult(a, b, symbol) {
  if (symbol === "+") {
    return a + b;
  } else if (symbol === "-") {
    return a - b;
  } else if (symbol === "*" || symbol === "P") {
    return a * b;
  } else if (symbol === "/") {
    return roundToThree(a / b);
  } else if (symbol === "s") {
    return roundToThree(Math.sqrt(a));
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

function Expression() {
  let navigate = useNavigate();
  const { symbols } = useParams();
  let { aLength, bLength, symbol } = parseUrl(symbols);
  const { first, second } = getRandomNumbers(aLength, bLength, symbol);

  const [a, setA] = useState(first);
  const [b, setB] = useState(second);

  const [input, setInput] = useState("");

  const [score, setScore] = useState(0);

  function stop() {
    setHighScore(score, symbols);
    navigate("/", { replace: true });
  }
  function resetNumbers() {
    const { first, second } = getRandomNumbers(aLength, bLength);
    setA(first);
    setB(second);
  }

  function checkAnswer(val) {
    setInput(val);
    if (Math.abs(parseFloat(val) - calculateResult(a, b, symbol)) < 0.0000001) {
      resetNumbers();
      setScore(score + 1);

      setInput("");
    }
  }

  return (
    <div className="expression">
      <Score score={score} symbols={symbols} />

      <Bar stop={stop} />
      {symbol !== "P" && symbol !== "s" ? (
        <Typography fontSize={"40px"}>
          {a} {symbol} {b}
        </Typography>
      ) : (
        <Special symbol={symbol} a={a} />
      )}
      <TextField
        autoComplete="off"
        autoFocus
        value={input}
        onChange={(e) => checkAnswer(e.target.value)}
      />
    </div>
  );
}

export default Expression;
