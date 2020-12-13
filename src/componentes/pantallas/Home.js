import React, {useState, useEffect} from "react";

const Home = () => {
  const [data, setData] = useState([])
  //const jasonToken = localStorage.getItem("jwt")
  //console.log(jasonToken);
  
  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("jwt")}`)
    myHeaders.set('Content-Type', 'application/json');

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
  },[]
  )

  return (
    <div className="home">
      {
        data ? data.map(item=>{
          return(
            <div className="card home-card">
            <h5>Dario</h5>
            <div className="card-image">
              { 
                item.extension === 'jpg' ? <img
                src={item.foto}
                alt=""
              /> : <p>El archivo no es una imagen</p>}
            </div>
            <div className="card-content">
              <i style={{ color: "red" }} className="material-icons">
                favorite
              </i>
              <h6>{item.titulo}</h6>
              <p>{item.body}</p>
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
