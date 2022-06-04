import { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../Context/AuthContext"
import axios from "axios"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Cookies from 'js-cookie'
import "./fooddetail.css"
// import { TotalContext } from "../Context/Total"


export const Fooddetails=() => {

    const [food,setFood] = useState({})
    const [total,setotal] = useState(0)
    const {handlevalue} =useContext(CartContext)
    const [qty,setqty] = useState(1)
    const [stock,setStock]= useState(false)
    // const {handlevalue1} =useContext(TotalContext)
    const {id} = useParams()
    console.log(id)
    // let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyOGNkNDhjNmZjYTk4ZjZkYmMyMTNjNyIsIm5hbWUiOiJSb2hpdCIsIm1vYmlsZW5vIjoxMjM5ODc0NTYwLCJlbWFpbCI6InBhYmxvQDk4Ny5jb20iLCJjcmVhdGVkQXQiOiIyMDIyLTA1LTI0VDEyOjUwOjIwLjUzN1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTA1LTI0VDEyOjUwOjIwLjUzN1oifSwiaWF0IjoxNjUzMzk2NzA1fQ.bdCKOLf50FgP5MmzZu8khM62PaS30z-SlWMsrY40vJ8"
    let token=Cookies.get('token')
    
    const {isAuth} = useContext(AuthContext)
    // const {cart} = useContext(CartContext)
 useEffect(() => {
    getData()
  },[])
    async function getData() {
        const data=await fetch(`https://food-albert.herokuapp.com/food/${id}`).then((d) => d.json())
        setFood(data)
        if(data.status=="out-of-stock")
        {
            setStock(true)
        }
        else{
            setStock(false)
        }
        console.log(data)
      
    }

      
       const handlevalue1= (e) => {
           
           
           let sum=0
           sum=sum+e.price
           setotal(sum)
     console.log(sum)
       }
    
   
    if(!isAuth)  //isAuth true nhi h false hi h
    {
       return <Navigate to ={"/login"}/>
    }

    const handlefetch=(e)=> {
    let obj={
        qty:qty,
        foodId:e._id,
    }
       fetch("https://food-albert.herokuapp.com/addtocart",
       {
           method:"POST",
           headers:{
               "content-type" :"application/json",
               "authorization":`Bearer ${token}`
           },
           body:JSON.stringify(obj)
          
       });
       console.log(obj)
        
    }

    //  const handlestatus=() => {
    //      axios.patch(`http://localhost:8080/food/${id}`,{
    //          ...food, "status":"out-of-stock"
           
    //      })
    //      .then(function(response){
    //          setFood(response.data)
             
    //      })
    //      .catch(function(error){
    //          console.log(error)
    //      })
    //  }
 
    //delete
    





const handleqty=(e)=> {
    setqty(e.target.value)
}





    return(
        <>
        <div className="details">
            <img src={food.image}/>
            <div>Recepie:{food.food_name}</div>
            <div>Price:${food.price}</div>
            <div>Ratings:{food.ratings}</div>
            <div>Type:{food.type}</div>
            <div>Restaurant{food.restaurant}</div>
            {/* <div>{food.status=="available" ? 
           <button onClick={() => {
               handlestatus()
           }} > Available</button>: <div>out-of-stock</div>
        }</div>  */}

        <div>{food.status}</div>

            {/* <Link to={"/cart"}><button >Place Order</button></Link> */}
            {!stock?   <input id="input" type="number" placeholder="quantity" defaultValue={1} onChange={ handleqty}/>:null}
          {!stock?  <button  style={{width:"200px"}} disabled={food.status==="out-of-stock"} onClick={() => {
        handlevalue(1)
        handlefetch(food)
         handlevalue1(food)     

      }}>ADD TO CART</button>:null}
    
        </div>
       {stock? <span>THIS ITEM IS OUT OF STOCK</span>:""}
        <div>Total:{total*qty}</div>
        </>
    )
}