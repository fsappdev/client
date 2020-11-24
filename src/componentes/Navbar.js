//file: src/componentes/navbar.js
import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          Logo
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/registrarse">Registrarse</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
