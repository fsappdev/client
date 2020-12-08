import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Registrarse = () => {
  //
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();
  //
  const clear = () => {
    setEmail("");
    setName("");
    setPassword("");
  };
  //
  const PostearDatos = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      M.toast({
        html: "El email no es correcto",
        classes: "#d500f9 purple accent-3",
      });
      clear();
      return;
    }
    fetch("http://localhost:4000/registrarse", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }), //por ES6 se "resumen" las claves/valor
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#d500f9 purple accent-3" });
        } else {
          M.toast({ html: data.message, classes: "#2196f3 blue" });
          clear();
          history.push("/login");
        }
      });
  };
  //
  return (
    <div className="container my-card">
      <div className="card auth-card input-field">
        <h2>InstaClone</h2>
        <input
          placeholder="nombre"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            //console.log(e.target.value);
          }}
        />
        <input
          placeholder="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() => PostearDatos()} /* siempre va en una arrow !!!!*/
          className="btn waves-effect waves-light"
          type="submit"
        >
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
