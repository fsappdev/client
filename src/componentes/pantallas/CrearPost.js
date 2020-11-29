import React from "react";

const CrearPost = () => {
  return (
    <div
      style={{
        margin: "20px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
      className="card input-filed"
    >
      <input type="text" placeholder="titulo" />
      <input type="text" placeholder="cuerpo" />
      <div class="file-field input-field ">
        <div className="btn purple accent-2 darken-1">
          <span>Subir imagen</span>
          <input type="file" multiple></input>
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Subir una imagen"
          ></input>
        </div>
      </div>
      <button
        className="btn waves-effect #1de9b6 teal accent-3 waves-light"
        type="submit"
      >
        _Postear!
      </button>
    </div>
  );
};

export default CrearPost;
