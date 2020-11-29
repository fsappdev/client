//file: src/componentes/navbar.js
import React from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          InstaClone
        </Link>
        <ul id="nav-mobile" className="right ">
          <li>
            <Link to="/login">Entrar</Link>
          </li>
          <li>
            <Link to="/registrarse">Registrarse</Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/postear">Postear</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
