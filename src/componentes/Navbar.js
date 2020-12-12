import React, {useContext, Fragment} from "react";
import { Link } from "react-router-dom";
import {UserContext} from '../App'

const Navbar = () => {
  const {state, dispatch} = useContext(UserContext)
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
        </Fragment>
      ]
    }else{
        return [
          <Fragment>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
            <li>
              <Link to="/registrarse">Registrarse</Link>
            </li>
          </Fragment>
        ]
    }
  }
  
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/login"} className="brand-logo left">
          InstaClone
        </Link>
        <ul id="nav-mobile" className="right ">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
