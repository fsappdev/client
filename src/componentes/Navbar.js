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
            <Link key="siguiendoa" to="/siguiendoa">Noticias</Link>
          </li>
          <li>
            <Link key="postear" to="/postear">Postear</Link>
          </li>
          <li>
            <Link key="perfil" to="/perfil">Mi Perfil</Link>
          </li>
          <li>
            <Link key="home" to="/">Explorar</Link>
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
        <div className="">
          <img
            className="brand-logo left"
            style={{  
              width: "40px", 
              height: "40px", 
              borderRadius: "50%",
              /* marginRight:"px", */
              marginTop: "12px",
              marginLeft:"15px"
            }}
            /* src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80" */
            src={state ? state.fotolink : "https://res.cloudinary.com/developfsa/image/upload/v1616595686/user_default_wsqzrm.png"}
            alt=""
          />
          <Link style={{marginLeft: "60px"}} to={state ? "/" : "/login"} className="brand-logo left">
            QuiloGram
          </Link>
        </div>
        <ul id="nav-mobile" className="right ">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
