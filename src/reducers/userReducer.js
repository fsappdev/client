export const initialState = null

export const reducer = (state, action) => {
   if(action.type == "USER"){
      return action.payload
   }
   if(action.type == "CLEAR"){
      return null
   }
   if(action.type == "UPDATE"){
      return {
         ...state,
         misseguidores: action.payload.misseguidores,
         siguiendoa: action.payload.siguiendoa
      }
   }
   if(action.type == "UPDATEFOTO"){
      return {
         ...state,
         fotolink: action.payload
      }
   }
   
   return state 
}