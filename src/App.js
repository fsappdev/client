//import logo from './logo.svg';
import React, {useEffect, createContext, Fragment, useReducer, useContext} from "react";
import Navbar from "./componentes/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Home from "./componentes/pantallas/Home";
import Perfil from "./componentes/pantallas/Perfil";
import UserProfile from './componentes/pantallas/UserProfile';
import Login from "./componentes/pantallas/Login";
import Registrarse from "./componentes/pantallas/Registrarse";
import CrearPost from "./componentes/pantallas/CrearPost";
import SubPosts from "./componentes/pantallas/SubPosts"
import {reducer, initialState} from './reducers/userReducer'

//file: app.js
export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state, dispatch} =useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    //console.log(typeof user)
    //console.log(user);
    if(user){
      dispatch({type:"USER", payload: user})
      //history.push('/')
    }else{
      history.push('/login')
    }
  },[])
  return(
    <Switch>
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
      <Route exact path="/perfil/:userid">
        <UserProfile />
      </Route>
      <Route exact path="/siguiendoa">
        <SubPosts />
      </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
      <Router>
        <Navbar />
        <Routing/>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
