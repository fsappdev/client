import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

const CrearPost = () => {
  //
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [extension, setExtension] = useState("")
  //
  useEffect(() => {
    if (url) {
      fetch("http://localhost:4000/crearpost", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ title, body, pic: url, ext: extension  }), //por ES6 se "resumen" las claves/valor
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes: "#d500f9 purple accent-3" });
        } else {
          M.toast({ html: "Posteado exitosamente", classes: "#2196f3 blue" });
          history.push("/");
        }
      });
    }
  },[url]
  )
  //
  const urlVarios = "https://api.cloudinary.com/v1_1/developfsa/auto/upload";
  const urlImagenes = "https://api.cloudinary.com/v1_1/developfsa/image/upload";
  //
  const clear = () => {
    setTitle("");
    setBody("");
    setImage("");
  };
  //
  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
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
    
  };
  //

  //
  return (
    <div
      style={{
        margin: "20px auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
      className="card input-filed"
    >
      <input
        type="text"
        placeholder="titulo"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="cuerpo"
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <div className="file-field input-field ">
        <div className="btn purple accent-2 darken-1">
          <span>Subir imagen</span>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          ></input>
        </div>
        <div className="file-path-wrapper">
          <input
            className="file-path validate"
            type="text"
            placeholder="Subir una imagen"
          ></input>
        </div>
      </div>
      <button
        className="btn waves-effect #1de9b6 teal accent-3 waves-light"
        type="submit"
        onClick={() => postDetails()}
      >
        _Postear!
      </button>
    </div>
  );
};

export default CrearPost;
