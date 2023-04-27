export function setHighScore(score, symbols) {
  const highScore = parseInt(localStorage.getItem(symbols));

  if (!highScore) {
    localStorage.setItem(symbols, score);
  }

  if (highScore < score) {
    localStorage.setItem(symbols, score);
  }
}

export function getHighScore(symbols) {
  const value = parseInt(localStorage.getItem(symbols));
  if (value) {
    return value;
  }
  return 0;
}
