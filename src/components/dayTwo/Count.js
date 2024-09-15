import React, { useState } from "react";
import "./Count.css";

export default function Count({ number }) {
  const [count, setCount] = useState(number);

  function handleDeCrease() {
    setCount(count - 1);
  }

  function handleInCrease() {
    setCount(count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <div>
        <h1>Componente Contador</h1>
      </div>
      <div className="button-container">
        <button
          className="button"
          aria-label="Decrementar"
          disabled={count === 0}
          onClick={handleDeCrease}
        >
          <p>-</p>
        </button>
        <p className="button"> {count} </p>
        <button
          className="button"
          aria-label="Incrementar"
          onClick={handleInCrease}
        >
          <p>+</p>
        </button>
      </div>
      <div className="button-container">
        <button
          className="button"
          aria-label="Resetear contador"
          onClick={handleReset}
        >
          Resetear
        </button>
      </div>
    </>
  );
}
