import React, {useState, useEffect, useContext} from "react";
import {UserContext} from '../../App'

const Home = () => {
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

    fetch("http://localhost:4000/todoslosposts", requestOptions)
      .then(res=>res.json())
      .then(result => {
        //console.log(result)
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
      headers: myHeaders,
      redirect: 'follow' 
    }
    fetch("http://localhost:4000/comentar", requestOptions)
    .then(res=>res.json())
    .then(result=>{console.log(result)
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

  return (
    <div className="home">
      {
        data ? data.map(item=>{
          return(
            
            <div key={item._id} className="card home-card">
            {/* console.log(item) */}
              <div style={{display: "flex", flexwrap: "wrap", justifycontent: "space-around"}} className="row">
                <small>Posteado por: </small><h6> {item.posteadoPor.name}</h6>
              </div>
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

                {
                  item.comentarios ? item.comentarios.map(comentario => {
                    return (
                      <h6 key={comentario._id} style={{fontWeight:"500"}}>
                      {comentario.posteadoPor.name} = 
                        <span >
                          {comentario.text}
                        </span>
                        
                      </h6>
                    )
                  }) : null
                }

                <form onSubmit={(e) => {
                  e.preventDefault()
                  //console.log(e.target[0].value)
                  comentar(e.target[0].value,item._id)
                }}>
                  <input type="text" placeholder="agrega un comentario" />
                </form>
                
              </div>
            </div>
          )
        }) : <h3>...Aun no se ha creado contenido</h3>
      }
    </div>
  );
};

export default Home;
