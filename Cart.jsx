

import { useContext, useState } from "react"
import React from 'react';
import { useEffect } from "react"
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import { CartContext } from "../Context/CartContext";
import "./cart.css"
export const Cart = () => {

//filteredstate
 
    //for one food we need obj. for multiple we need array
    const [foods, setFood] = useState([])
     const {handlevalue} = useContext(CartContext)
   
    // const [seven,setSeven] = useState([{}])
    // const [nine,setNine] = useState([{}])
    // const [kfc,setKfc] = useState([{}])
    const [page,setpage] = useState(1)
      
    // let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYyOGNkNDhjNmZjYTk4ZjZkYmMyMTNjNyIsIm5hbWUiOiJSb2hpdCIsIm1vYmlsZW5vIjoxMjM5ODc0NTYwLCJlbWFpbCI6InBhYmxvQDk4Ny5jb20iLCJjcmVhdGVkQXQiOiIyMDIyLTA1LTI0VDEyOjUwOjIwLjUzN1oiLCJ1cGRhdGVkQXQiOiIyMDIyLTA1LTI0VDEyOjUwOjIwLjUzN1oifSwiaWF0IjoxNjUzMzk2NzA1fQ.bdCKOLf50FgP5MmzZu8khM62PaS30z-SlWMsrY40vJ8"
    
    let token=Cookies.get('token')
                    
                   
                   

                    async function getData() {
                        const data=await fetch("https://food-albert.herokuapp.com/addtocart",{
                          
                            headers:{
                                method:"GET",
                                // "content-type" :"application/json",
                                "authorization":`Bearer ${token}`
                            },
                     
                        }).then(d=> d.json())
                        setFood(data)
                          console.log(foods)
                          handlevalue(data.length)
                        
                    }
                       useEffect(() => {
                           getData()
                       },[])






    //how to add price in array of object  use for total
     const sumall = foods.reduce((prev, curr) => prev +(curr.foodId.price*curr.qty) , 0);
    // const sumall = foods.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
    
       var arr= localStorage.setItem("mytime", sumall);





    //sorting

    // function onSelectionChange(e) {
    //     const sortDirection = e.target.value;

    //     const copyArray = [...foods]; // create a new array & not mutate state


    //     copyArray.sort((a, b) => {
    //         //   return sortDirection === "0" ? a.price - b.price : b.price - a.price;
    //         if (sortDirection === "0") {
    //             return a.price - b.price
    //         }
    //         else if (sortDirection === "1") {
    //             return b.price - a.price
    //         }

    //         else if (sortDirection === "2") {
    //             return a.ratings - b.ratings
    //         }

    //         else if (sortDirection === "3") {
    //             return b.ratings - a.ratings
    //         }

    //     });
    //     setFood(copyArray); //re-render

    // }



    //                filter
    // function onSelectionChanges(e) {



    //     const sortDirection = e.target.value;

    //     const copyArray = [...foods];


    //     let newArray = kfc.filter(function (el) {

    //         if (sortDirection === "6") {
    //             return el.restaurant === "KFC"
    //               setkfc(kfc)
    //         }


    //         else if (sortDirection === "8") {
    //             return el.restaurant === "Grill-in"

    //         }
    //         else if (sortDirection === "9") {
    //             return el.prpice < 1000
    //         }


    //     });

    //     console.log(newArray)
    //     setFood(newArray)

    // }



    //Filter
   

    // function handleFilter(e)
    // {
    //     let filterDirection=e
    //    console.log(filterDirection)
    //     //  console.log(kfc)
    //     if(filterDirection===6)
    //     {
   
         
    //     // let nondevelopers = kfc.filter(member => member.restaurant ==="KFC")
    //     const below=kfc.filter( item=> item.restaurant==="KFC")
    //     console.log(below)
    //     console.log("hello")
    //     setFood([...below])
       
    //     }
        
    //      else if(filterDirection===8)
    //     {
            
                 
    //         const above=seven.filter(item=> item.restaurant==="Grill-in")
    //         setFood([...above])
    //     } 

    //     else if(filterDirection===9)
    //     {
            
                 
    //         const mac=nine.filter(item=> item.restaurant==="MacDonald")
    //         setFood([...mac])
    //     } 
    // }
   








    







  //remove from cart
     async function  handleRemove(id) {
        // const newList = foods.filter((item) => item.id !== id);
        
            const data = await fetch(`https://food-albert.herokuapp.com/addtocart/${id}`,
            
            {
                method:"DELETE"
            }
            ).then(d => d.json())
             getData()
             console.log(data)
        // console.log(id)
    }
    return (
        <>
        <h1>CART PAGE</h1>
        <div className="total"><h1>Total:${sumall}</h1></div>
       {/* <input value={text} onChange={(e)=>setText(e.target.value)}/>
          <button onClick={()=>setQ(text)}>Search</button> */}

             <div className="list_container">
                                 {foods.map((e) => {
                    return (
                        <>
                            <div key={e._id}>
                                <div ><img src={e.foodId.image } /></div>
                                <div><h3> Ratings:{e.foodId.ratings}</h3></div>
                                <div><h3>Quantity:{e.qty}</h3></div>
                                <div><h3>Price:  ${e.foodId.price}</h3> </div>
                                <div><h3>Food_name: {e.foodId.food_name}</h3></div>
                                <div>Restaurant:{e.foodId.restaurant}</div>
                                <div>Type: {e.foodId.type}</div>
                                <div>

                                    <button style={{width:"200px"}}  className="learn-more" type="button" onClick={() => handleRemove(e._id)}> Remove
                                    </button>



                                </div>
                            </div>
   
                        </>
                    )
                })}
            </div> 
            <button style={{width:"200px"}} onClick={()=>  setpage(page=> {return page-1})}>Prev Page</button>
       <button style={{width:"200px"}} onClick={()=> setpage(page=> {return page+1})}>Next Page</button>  
          <Link to={"/payment"}><button style={{width:"200px"}} >Place Order</button></Link>               
            <div> 

               
             </div> 
        </>
    )
}




