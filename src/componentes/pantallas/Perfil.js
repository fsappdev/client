import React from "react";

const Perfil = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0px, auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px Solid grey",
        }}
      >
        <div className="">
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80"
            alt=""
          />
        </div>
        <div className="">
          <h4>Jane Doe</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "110%",
            }}
          >
            <h6>40 posteos</h6>
            <h6>40 seguidores</h6>
            <h6>40 siguiendo</h6>
          </div>
        </div>
      </div>
      <div className="galeria">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80"
          alt=""
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80"
          alt=""
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80"
          alt=""
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80"
          alt=""
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80"
          alt=""
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Perfil;
