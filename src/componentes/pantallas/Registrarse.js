import React from "react";
import { Link } from "react-router-dom";

const Registrarse = () => {
  return (
    <div className="container my-card">
      <div className="card auth-card input-field">
        <h2>InstaClone</h2>
        <input placeholder="nombre" type="text" />
        <input placeholder="Correo electrónico" type="text" />
        <input placeholder="Contraseña" type="text" />
        <br />
        <br />
        <button className="btn waves-effect waves-light" type="submit">
          _Registrarse
        </button>
        <br />
        <h6>
          <Link to="/login">Ya tienes una cuenta? Entra aquí</Link>
        </h6>
      </div>
    </div>
  );
};

export default Registrarse;
