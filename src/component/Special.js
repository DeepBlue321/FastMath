import React from "react";

function Special({ symbol, a }) {
  return <div>{symbol === "s" ? <h1>√{a}</h1> : <h1>{a}²</h1>}</div>;
}

export default Special;
