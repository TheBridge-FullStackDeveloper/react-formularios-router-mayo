import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserForm = () => {
  const initialState = {
    name: "",
    email: "",
  };
  //*estados del componente
  //estado del formulario
  const [data, setData] = useState(initialState);
  //estado del botón disabled
  const [btnDisabled, setBtnDisabled] = useState(true);
  //estado del mensaje de validación
  const [message, setMessage] = useState("");

  const navigate = useNavigate(); //inicializamos navigate

  const handleInputChange = (event) => {
    // console.log(event.target.name); //nombre del input en el que escribo
    // console.log(event.target.value); //lo que escribo
    setData({
      ...data, //para que no borre los valores que ya había
      [event.target.name]: event.target.value,
    });
    if (data.name.length + 1 < 3) {
      setMessage("Name must be at least 3 characters");
      setBtnDisabled(true);
    } else {
      console.log("eee");
      setMessage(null);
      setBtnDisabled(false);
    }
  };
  //funcion que limpia el formulario
  const clearForm = () => {
    setData(initialState);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //acciones formularios
    console.log("Datos formulario", data);
    //limpiamos formulario
    clearForm();
    setMessage("Formulario enviado con éxito")
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
          value={data.name} //conectamos nuestro input con el estado
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
          value={data.email}
        />
        <button disabled={btnDisabled} type="submit">
          Enviar
        </button>
        {message}
      </form>
    </div>
  );
};
