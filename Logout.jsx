import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import { CartContext } from "../Context/CartContext";
 


 
 export const Logout=()=> {
 const { handleAuth } =  useContext(AuthContext)
 const { handlevalue } = useContext(CartContext)
  const Navigate= useNavigate()
    const handlelogout=(e)=> {
        if(e=="yes")
        {
            handleAuth(false)
            
        }
        Navigate("/")
        handlevalue(0)
        
    }
     return(
         <>
         <div>
             <h1>Are you sure do want to logout</h1>
             <button  style={{width:"200px"}} onClick={()=>handlelogout("yes")}>YES</button>
             <button style={{width:"200px"}} onClick={()=>handlelogout("no")}>NO</button>
         </div>
         </>
     )
 }