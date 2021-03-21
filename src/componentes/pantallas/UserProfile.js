import React,{useEffect, useState, useContext} from "react";
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom';

const UserProfile = () => {

   //////////////////////
  //
  const [userPerfil, setPerfil] = useState(null)
  const {state, dispatch} = useContext(UserContext) 
  const {userid} = useParams()
  console.log(userid);
  //
  useEffect(() => {
    fetch(`http://localhost:4000/user/${userid}`,{
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
    }
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result)
    //setPics(result)
    setPerfil(result)
  })
  },[])
  
  //
  const seguirUser = () => {
     fetch(`http://localhost:4000/seguir`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({seguirId:userid})
    })
    .then(res=>res.json())
    .then(data=>{
      dispatch({
         type: "UPDATE",
         payload: {siguiendoa: data.siguiendoa, misseguidores:data.misseguidores},
        })
      localStorage.setItem("user",JSON.stringify(data)) 
      console.log(data)
    })
  }


  ///////////////////////

  return (
    <div className="center-align" style={{margin: "0px, auto"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
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
        <div >
         {/* { <h4>{state ? state.name : 'Cargando...'}</h4>} */}
         <h4>{userPerfil ? userPerfil.user.name : 'Cargando...'}</h4>
         <h6>{userPerfil ? userPerfil.user.email : 'Cargando...'}</h6>
            <div
               style={{
               display: "flex",
               justifyContent: "space-between",
               width: "110%",
               }}
            >
               <h6>40 posts</h6>
               <h6>{userPerfil ? `${userPerfil.user.misseguidores.length} seguidor/es` : 'Cargando...'}</h6>
               <h6>{userPerfil ? `${userPerfil.user.siguiendoa.length} siguiendo` : 'Cargando...'}</h6>
            </div>
            <button
               style={{marginBottom:"7px"}}
               className="btn waves-effect waves-light blue darken-1"
               type="submit"
               onClick={() => seguirUser()}
            >
               _Seguir!
            </button>
        </div>
      </div>
      <div className="galeria">
      {
         userPerfil ? userPerfil.posts.map((item) => {
           return (
             <img
               className="item"
               key={item._id}
               src={item.foto}
               alt={item.titulo}
            />
           )
         }
         ) : <p>Aún no ha posteado...</p>
       }
        
        
      </div>
    </div>
  );
};

export default UserProfile;
