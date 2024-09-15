import React, { useState } from "react";

export default function DynamicForm() {
  const [inputs, setInputs] = useState([{ id: Date.now(), valor: "" }]);

  const inputAdd = () => {
    setInputs([...inputs, { id: Date.now(), valor: "" }]);
  };

  const inputDelet = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleInput = (id, valor) => {
    setInputs(
      inputs.map((input) => (input.id === id ? { ...input, valor } : input))
    );
  };

  const handleSend = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSend}>
      {inputs.map((input) => (
        <div key={input.id}>
          <input
            value={input.valor}
            type="text"
            onChange={(e) => handleInput(input.id, e.target.value)}
          />
          <button type="button" onClick={() => inputDelet(input.id)}>
            Eliminar
          </button>
        </div>
      ))}
      <button type="button" onClick={inputAdd}>
        Agregar
      </button>
      <button type="submit">Enviar</button>
    </form>
  );
}
