//import logo from './logo.svg';
import React from "react";
import Navbar from "./componentes/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./componentes/pantallas/Home";
import Perfil from "./componentes/pantallas/Perfil";
import Login from "./componentes/pantallas/Login";
import Registrarse from "./componentes/pantallas/Registrarse";
import CrearPost from "./componentes/pantallas/CrearPost";

//file: app.js

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/registrarse">
        <Registrarse />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/perfil">
        <Perfil />
      </Route>
      <Route exact path="/postear">
        <CrearPost />
      </Route>
    </Router>
  );
}

export default App;
