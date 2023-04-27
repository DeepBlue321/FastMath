export function getRandomNumbers(lenA, lenB, symbol) {
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
