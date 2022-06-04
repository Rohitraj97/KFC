
import {Link} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import "./Navbar.css"
import  {useContext} from "react"
 

import { CartContext } from "../Context/CartContext"
export const Navbar=() => {

    const {isAuth} = useContext(AuthContext)
    const {cart} = useContext(CartContext)
    console.log(cart)
    return(
       <div className="navbar">

            <Link className="nav-bar" to="/">
       <h1>  HOME</h1>  
            </Link>
 
 
 {/* <Link to="/Payment"><h1>PAYMENT</h1></Link> */}
 <Link to="/foodlist"><h1>FOOD LIST</h1></Link>
 <Link to="/Cart"><h1>CART:{cart}</h1></Link>
 <Link to= {isAuth ? "/logout": "/login"}>

   <h1> {isAuth ? "LOGOUT" : "LOGIN"}</h1> 
   
 </Link>
 
 
            
       </div>
    )
}