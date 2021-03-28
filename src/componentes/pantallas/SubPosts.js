import React, {useState, useEffect, useContext, Fragment} from "react";
import {UserContext} from '../../App'
import {Link} from 'react-router-dom';

const SubPosts = () => {
  const [data, setData] = useState([])
  const {state, dispatch}= useContext(UserContext)

  let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
    myHeaders.set('Content-Type', 'application/json');
  //

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow' 
    };
    fetch("http://localhost:4000/subposts", requestOptions)
      .then(res=>res.json())
      .then(result => {
        console.log(result)
        setData(result)
      })
      .catch(error => console.log('error', error));
  },[])

  //
  const likePost = (id) => {
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({postId: id}),
      headers: myHeaders,
      redirect: 'follow' 
    };
    fetch("http://localhost:4000/like",requestOptions)
    .then(res=>res.json())
    .then(result => {
      //console.log(result)
        const newData = data.map(item=>{
          // eslint-disable-next-line
          if(item._id==result._id){
              return result
          }else{
              return item
          }
      })
      setData(newData)
      })
      .catch(error => console.log('error', error));
  }
  
  const disLikePost = (id) => {
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({postId: id}),
      headers: myHeaders,
      redirect: 'follow' 
    };
    fetch("http://localhost:4000/dislike",requestOptions)
    .then(res=>res.json())
    .then(result => {
      //console.log(result)
        const newData = data.map(item=>{
          if(item._id==result._id){
              return result
          }else{
              return item
          }
      })
      setData(newData)
    })
    .catch(error => console.log('error', error));
  }

  const comentar = (text, postId) => {
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({text, postId}),
      headers: myHeaders
    }
    fetch("http://localhost:4000/comentar", requestOptions)
    .then(res=>res.json())
    .then(result=>{
      //console.log(result)
      const newData = data.map(item=>{
        if(item._id==result._id){
            return result
        }else{
            return item
        }
      })
      setData(newData)
    })
    .catch(err=>console.log('error', err))
  }

  const desComentar = (text, postId) => {
    const requestOptions = {
      method: 'PUT',
      body: JSON.stringify({text, postId}),
      headers: myHeaders
    }
    fetch("http://localhost:4000/descomentar", requestOptions)
    .then(res=>res.json())
    .then(result=>{
      console.log(result)
      const newData = data.map(item=>{
        if(item._id==result._id){
            return result
        }else{
            return item
        }
      })
      setData(newData)
    })
    .catch(err=>console.log('error', err))
  }

  const deletePost = (postId) => {
    const requestOptions = {
      method: "delete",
      body: JSON.stringify({postId}),
      headers: myHeaders
    }
    fetch(`http://localhost:4000/delete/${postId}`, requestOptions)
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      const newData = data.filter(item=>item._id !== result._id)
      setData(newData)
    })
    .catch(error=>console.log('error',error))
  }

    ///////
  return (
    <div className="home">
      {
        data.length != 0 ? data.map(item=>{
          return(
            
            <div key={item._id} className="card home-card">
            {/* console.log(item) */}
                {/* <div className="row" style={{display: "flex", flexwrap: "wrap", justifycontent: "space-around"}}        >
                
                </div> */}
                { /* QUIEN POSTEA Y BTN DELETE */}
                <h6 className="my-10">
                  <small>Posteado por: </small> 
                  <Link 
                    to={item.posteadoPor._id !== state._id ?  "/perfil/"+item.posteadoPor._id : "/perfil"}>
                    {item.posteadoPor.name}
                  </Link>
                  {item.posteadoPor._id == state._id ? 
                    <Fragment>                    
                      <i onClick={()=>{deletePost(item._id)}} style={{ color: "red",float:"right" }} className="material-icons pointer">
                        delete
                      </i>
                      <small style={{float: "right"}}>eliminar post</small>
                    </Fragment> : null }
                </h6>
                {/* card */}
                <div className="card-image">
                  { 
                    item.extension === 'jpg' || item.extension === 'png' ? <img
                    src={item.foto}
                    alt={item.titulo}
                    
                  /> : <p>El archivo no es una imagen</p>}
                </div>
              <div className="card-content">
                <i style={{ color: "red" }} className="material-icons pointer">
                  favorite
                </i>
                <i style={{ color: "green" }} className="material-icons pointer">
                  save
                </i>     
                {item.likes.includes(state._id) ? <i onClick={()=>{disLikePost(item._id)}}className="material-icons pointer">thumb_down</i> : <i onClick={()=>{likePost(item._id)}}className="material-icons pointer">thumb_up</i> }
                
                <h6>{item.likes ? item.likes.length : 0} Likes </h6>
                <h5>{item.titulo}</h5>
                <h6>{item.cuerpo}</h6>

                <form onSubmit={(e) => {
                  e.preventDefault()
                  //console.log(e.target[0].value)
                  comentar(e.target[0].value,item._id)
                }}>
                  <input type="text" placeholder="agrega un comentario" />
                </form>

                {
                  item.comentarios ? item.comentarios.map(comentario => {
                    return (
                      <h6 key={comentario._id}>
                       
                      <span style={{fontWeight:"bold"}}>
                          {comentario.posteadoPor.name}   
                      </span>
                      _dijo: {comentario.text}
                      {comentario.posteadoPor._id == state._id || item.posteadoPor._id == state._id ? 
                        <Fragment>
                          <i onClick={()=>{desComentar(comentario.text,item._id)}} 
                             style={{ color: "red",float:"right" }} 
                             className="material-icons pointer"
                          >
                            delete
                          </i>
                          {/* <small style={{float: "right"}}>borrar comentario</small> */}
                        </Fragment> : null }
                      </h6>
                    )
                  }) : null
                }
       
              </div>
            </div>
          )
        }) : <h5 className="center-align">Para ver el contenido de tus usuarios favoritos en la sección de noticias clickea el boton _seguir en el perfil de usuario🙋‍♀️🙋‍♂️</h5>
      }
    </div>
  );
};

export default SubPosts;
