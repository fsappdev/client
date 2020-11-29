import React from "react";

const Login = () => {
  return (
    <div className="container my-card">
      <div className="card auth-card input-field">
        <h2>InstaClone</h2>
        <input placeholder="email" type="text" />
        <input placeholder="password" type="text" />
        <br />
        <br />
        <button
          className="btn waves-effect waves-light blue darken-1"
          type="submit"
        >
          _Entrar!
        </button>
        <br />
      </div>
    </div>
  );
};

export default Login;
