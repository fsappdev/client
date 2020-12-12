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