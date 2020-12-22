import React, {useState, useEffect} from "react";

const Home = () => {
  const [data, setData] = useState([])
  //const jasonToken = localStorage.getItem("jwt")
  //console.log(jasonToken);

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
    .catch(error => console.log('error', error));
  }

  return (
    <div className="home">
      {
        data ? data.map(item=>{
          return(
            
            <div key={item._id} className="card home-card">
            {console.log(item)}
              <div style={{display: "flex", flexwrap: "wrap", justifycontent: "space-around"}} className="row">
                <h6>Posteado por: </h6><h5> {item.posteadoPor.name}</h5>
              </div>
                <div className="card-image">
                  { 
                    item.extension === 'jpg' || item.extension === 'png' ? <img
                    src={item.foto}
                    alt={item.titulo}
                    
                  /> : <p>El archivo no es una imagen</p>}
                </div>
              <div className="card-content">
                <i style={{ color: "red" }} className="material-icons">
                  favorite
                </i>
                <i onClick={()=>{likePost(item._id)}}className="material-icons">thumb_up</i>
                <i onClick={()=>{disLikePost(item._id)}}className="material-icons">thumb_down</i>
                <h6>{item.likes ? item.likes.length : 0} Likes </h6>
                <h5>{item.titulo}</h5>
                <p>{item._id}</p>
                <input type="text" placeholder="agrega un comentario" />
              </div>
            </div>
          )
        }) : <h3>...Aun no se ha creado contenido</h3>
      }
    </div>
  );
};

export default Home;
