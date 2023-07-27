import React, { useState } from "react";

const FormOne = () => {
  const [nombre, setNombre] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(nombre);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <button onClick={onSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default FormOne;
