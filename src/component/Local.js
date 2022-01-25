import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function saveLocal(score, symbols) {
  const highScore = parseInt(localStorage.getItem(symbols));

  if (!highScore) {
    localStorage.setItem(symbols, score);
  }

  if (highScore < score) {
    localStorage.setItem(symbols, score);
  }
}

function getLocal(symbols) {
  const value = parseInt(localStorage.getItem(symbols));
  if (value) {
    return value;
  }
  return 0;
}

export { saveLocal, getLocal };
