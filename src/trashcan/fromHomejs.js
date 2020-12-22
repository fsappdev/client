/* useEffect(() => {
   //const jasonToken = localStorage.getItem("jwt")
   //
   
   //
   console.log(localStorage.getItem("jwt"));
   fetch('/todoslosposts',{
     method: "GET",
     Headers: {
       "authorization":`Bearer ${localStorage.getItem("jwt")}`,
       "Content-Type": "application/json",
     },
     
   })
   .then(res=>res.json())
   .then(result=>{
     console.log(result)
     setData(result.post)
   })
   .catch(error=>console.log(error))
 },[]) */



/*  fetch('/todoslosposts',{
   method: "GET",
   Headers: {
     "authorization":`Bearer ${localStorage.getItem("jwt")}`,
     "Content-Type": "application/json",
   },
   
 })
 .then(res=>res.json())
 .then(result=>{
   console.log(result)
   setData(result.post)
 })
 .catch(error=>console.log(error)) */




 //
  /* const likePost = (id) => {
    console.log(id);
    fetch('http://localhost:4000/like',{
      method:"put",
      headers: {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    },
      body: JSON.stringify({postId: id}) 
    })
    .then(res=>res.json())
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log('error', error));
  }

  const disLikePost = async (id) => {
    console.log(id);
    await fetch('http://localhost:4000/dislike',{
      method:"put",
      headers: {
        "Content-Type":"application/json",
        "Authorization": `Bearer ${localStorage.getItem("jwt")}`
    },
      body: JSON.stringify({postId: id}) 
    })
    .then(res=>res.json())
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log('error', error));
  } */
  //