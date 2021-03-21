import React, {useContext, Fragment} from "react";
import { Link, useHistory } from "react-router-dom";
import {UserContext} from '../App'


const Navbar = () => {
  //
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  //
  const renderList = () => {
    if(state){
      return [
        <Fragment>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
          <li>
            <Link to="/postear">Postear</Link>
          </li>
          <button
          style={{marginRight:"10px"}} 
          onClick={()=>{
              localStorage.clear() 
              dispatch({type:"CLEAR"})
              history.push("/login")
            }} 
          className="btn waves-effect #c62828 red darken 1">
            Cerrar Sesion
          </button>
        </Fragment>
      ]
    }else{
        return [
          <Fragment>
            <li>
              <Link key="login" to="/login">Entrar</Link>
            </li>
            <li>
              <Link key="registrarse" to="/registrarse">Registrarse</Link>
            </li>
          </Fragment>
        ]
    }
  }
  
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/login"} className="brand-logo left">
          QuiloGram
        </Link>
        <ul id="nav-mobile" className="right ">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
