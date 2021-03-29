import React,{useEffect, useState, useContext} from "react";
import {UserContext} from '../../App'

const Perfil = () => {
  //
  const [mypics, setPics] = useState([])
  const [imgPerfil, setImgPerfil] = useState("");
  const [extension, setExtension] = useState("")
  const [url, setUrl] = useState("");
  const {state, dispatch} = useContext(UserContext) 
  //

  //
  const urlVarios = "https://api.cloudinary.com/v1_1/developfsa/auto/upload";
  //

  useEffect(() => {
    fetch('http://localhost:4000/misposts',{
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    }
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result)
    setPics(result)
  })
  },[])
  
  //

  useEffect(() => {
    if(imgPerfil){
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
        /* localStorage.setItem("user",JSON.stringify({...state, fotolink:data.url}))
        dispatch({type:"UPDATEFOTO", payload: data.url}) */
        updateFoto(data.url)
      })
      /* .then(clear()) */
      .catch((err) => console.log(err));
    }
  }, [imgPerfil])

  /* useEffect(() => {
    if (url) {
      fetch("http://localhost:4000/updatefoto",{
        method: "put",
        body: JSON.stringify({ id : state._id, fotolink : url })
      })
      .then((res) => res.json())
      .then(data=>console.log({data}))
      .catch((err) => console.log('no se pudo guardar en la bd',err))
    }
  }, [url]) */

  const updateFoto = (url) => {
    fetch("http://localhost:4000/updatefoto",{
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({fotolink : url })
      })
      .then((res) => res.json())
      .then(async data=>{
        console.log({data})
        localStorage.setItem("user",JSON.stringify({...state, fotolink:url}))
        dispatch({type:"UPDATEFOTO", payload: url})
      })
      .catch((err) => console.log('no se pudo guardar en la bd',err))
  }

  const CambiarFoto = (file) => {
    setImgPerfil(file) /* seteamos el state */
    //ahora vamos a actualizar la bd con el link perteneciente a la foto

  }



  return (
    <div  style={{ margin: "0px, auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "18px 0px",
          borderBottom: "1px Solid grey",
        }}
      >
      
        <div > {/* div de la imagen */}
          <img
            style={{  display:"flex", 
              width: "160px", 
              height: "160px", 
              borderRadius: "50%",
              marginRight:"14px",
              marginTop:"35px"
            }}
            /* src="https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=769&q=80" */
            src={state ? state.fotolink : "https://res.cloudinary.com/developfsa/image/upload/v1616595686/user_default_wsqzrm.png"}
            alt=""
          />
            
        </div>
        {/*  */}
        <div >
          <h4>{state ? state.name : 'Cargando...'}</h4>
          <h6>{state ? state.email : 'Cargando...'}</h6>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "110%",
            }}
          >
            <h6>{mypics.length} Publicaciones</h6>
            <h6>{state ? state.misseguidores.length : 0} Seguidores</h6>
            <h6>Siguiendo a {state ? state.siguiendoa.length : 0} </h6>
          </div>

          <div className="file-field input-field">
            <div className="btn purple accent-2 darken-1">
              <i class="large material-icons">add_a_photo</i>
              {/* <i class="medium material-icons">control_point</i> */}
              <span> Cambiar Foto </span>
              <input
                type="file"
                onChange={(e) => CambiarFoto(e.target.files[0])}
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
          {/*  */}        
        </div>
        {/*  */}  
          
      </div>
      
  
      <div className="galeria">
      {
        mypics.length != 0 ? mypics.map((item) => {
          return (
            <img
              className="item"
              key={item._id}
              src={item.foto}
              alt={item.titulo}
            />
          )
        }
        ) : <h5 className="center-align">Aún no has creado contenido, para hacerlo ve al menu de Postear desde ahí podrás subir material que será visto por todos tus seguidores en la seccion de noticias.🙋‍♀️🙋‍♂️</h5>
      }   
      </div>
    </div>
  );
};

export default Perfil;
