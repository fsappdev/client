import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Registrarse = () => {
  //
  const urlVarios = "https://api.cloudinary.com/v1_1/developfsa/auto/upload";
  const urlImagenes = "https://api.cloudinary.com/v1_1/developfsa/image/upload";
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgPerfil, setImgPerfil] = useState("");
  const [url, setUrl] = useState("");
  const [extension, setExtension] = useState("")
  //
  useEffect(() => {
   if(url){subirCampos()}
  }, [url])
  //
  const history = useHistory();
  //
  const clear = () => {
    setEmail("");
    setName("");
    setPassword("");
  };
  //
  const subirFotoPerfil = () => {
    const data = new FormData();
    data.append("file", imgPerfil);
    data.append("upload_preset", "instaclone");
    data.append("cloud_name", "developfsa");
    data.append("resource_type", "auto");
    fetch(urlVarios, {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExtension(data.format)
        setUrl(data.url)
      })
      /* .then(clear()) */
      .catch((err) => console.log(err));
  }
  //
  const subirCampos = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
      ){
        M.toast({
          html: "El email no es correcto",
          classes: "#d500f9 purple accent-3",
        });
        clear();
        return;
      }
    fetch("https://instaclon-server.herokuapp.com/registrarse", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, fotolink : url }), //por ES6 se "resumen" las claves/valor
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
  }
  //
  const PostearDatos = () => {
    if(imgPerfil){
      subirFotoPerfil()
    }else{
      subirCampos()
    }
  };
  //
  return (
    <div className="container my-card">
      <div className="card auth-card input-field">
        <h2>QuiloGram</h2>
        <div className="row">
          <div className="input-field">
            <i class="material-icons prefix">account_circle</i>
            <label for="nombre">Nombre</label>
            <input
              id="nombre"
              className="validate"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                //console.log(e.target.value);
              }}
            />
          </div>      
        </div>
        <div className="row">
          <div className="input-field">
            <i class="material-icons prefix">email</i>
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              className="validate"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
            <div className="input-field">
            <i class="material-icons prefix">lock</i>
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              className="validate"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />  
          </div>
        </div>
        
        
        <div className="file-field input-field ">
          <div className="btn purple accent-2 darken-1">
            <span>Foto de Perfil</span>
            <input
              type="file"
              onChange={(e) => setImgPerfil(e.target.files[0])}
            >
            </input>
          </div>
          <div className="file-path-wrapper">
            <input
              className="file-path validate"
              type="text"
              placeholder="Subir una imagen"
              >
            </input>
          </div>
      </div>
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
