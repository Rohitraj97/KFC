

import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Foor.css"


export const Foodlist=() => {

const [food,setFood] =useState([
 
])
const [data,setdata]= useState([])
// const [seven,setSeven] = useState([{}])
// const [nine,setNine] = useState([{}])
// const [kfc,setKfc] = useState([{}])
// const [page,setpage] = useState(1)
// const [text, setText] = useState("");
// const [rat,setrat] = useState(0)
// const [rats,setrats] = useState(0)
// const [q, setQ] = useState("");


async function getData() {
    const data=await fetch("https://food-albert.herokuapp.com/food").then(d=> d.json())
    setFood(data)
     setdata(data)
     
}
   useEffect(() => {
       getData()
   },[])



  //ADD to cart
 const handleFilter=(e)=> {
    let  Element=[...data]
    
   Element= Element.filter(item=> (
      
      item.restaurant===e
      
    ))
    setFood(Element)
    // console.log(Element)
  }
  
//sorting
function onSelectionChange(e) {
  const sortDirection = e.target.value;

  const copyArray = [...food]; // create a new array & not mutate state


  copyArray.sort((a, b) => {
      //   return sortDirection === "0" ? a.price - b.price : b.price - a.price;
      if (sortDirection === "0") {
          return a.price - b.price
      }
      else if (sortDirection === "1") {
          return b.price - a.price
      }

      else if (sortDirection === "2") {
          return a.ratings - b.ratings
      }

      else if (sortDirection === "3") {
          return b.ratings - a.ratings
      }

  });
  setFood(copyArray); //re-render

}
  //  console.log(food)
   return (
     <div>
       <div className="i">
       <img src="https://grillinn.in/wp-content/themes/grill_inn/img/GrillInn-Logo.png"/>
       <img src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"/>

       <img src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/icons/arches-logo_108x108.jpg"/>
       <img style={{width:"200px"}} src="https://techstory.in/wp-content/uploads/2021/07/SEBI-grants-approval-to-Zomatos-blockbuster-IPO.jpg"/>
 <img src="data:image/png;base64,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"/>      
     <img src="data:image/jpeg;base64,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"/>
    <img style={{margin:"40px"}} src="data:image/jpeg;base64,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"/>
       </div>
    <h1>LET'S ORDER</h1>
     
        <div className="sort" style={{width:"10%",marginLeft:"1250px"}}>
        <h1 style={{textalign:"right"}}>SORTING</h1>
            <select  defaultValue={0} onChange={onSelectionChange}>
                <option className="select" value={0}>Ascending-Price</option>
                <option className="select" value={1}>Descending-price</option>
                <option className="select" value={2} >Ratings-Ascending</option>
                <option className="select" value={3} >Ratings-Descending</option>
            </select>
            </div>
            <br></br>
               <div style={{ display:"flex", margin:"5px"}}>
                 <img src="https://www.mcdonalds.com/content/dam/sites/usa/nfl/publication/1pub_FreeNugv4_1168x520.jpg"/>
              <div className="filter">
              <h1>FILTERING</h1>
            <button style={{width:"200px"}} onClick={() => handleFilter("KFC")}>KFC</button>
             
            <button style={{width:"200px"}} onClick={() => handleFilter("Grill-in")}>Grill-in</button>
            
            <button style={{width:"200px"}} onClick={() => handleFilter("MacDonald")}>Macdonald</button>
            <button style={{width:"200px"}} onClick={() => handleFilter("Second-wife")}>Second-wife</button>
            <button style={{width:"200px"}} onClick={() => handleFilter("Plaza")}>Plaza</button>
            {/* <button style={{width:"200px"}} onClick={() => handleFilter("food")}>default</button> */}
            </div>
            </div>
      
    <div className="list_container"   style={{border:"2px solid red",marginRight:"10px"}}
      
     
       
  >
      {/* On clicking this card anywhere, user goes to user details */}


     {food.map((e) => {
    
       return (
       <>

       <div className="food_card" style={{border:"5px solid rgb(255,186,54)",
        background:" #eee",
        
        maxwidth:"800px" ,
        // margin: "30px auto",
        padding: "5px", margin:"3px",height:"400px", borderRadius:"10px"}} key={e._id}>
        <Link to = {`/foodlist/${e._id}`}>
          
      
    <div>    <img className="food_image"  src={e.image} /></div>
    <div>    <span className="employee_name"><p style={{margin:"0.8em"}}>{e.food_name} </p>  
       </span></div>
     <div>   <span className="employee_title"><p style={{margin:"0.8em"}}>${e.price}</p></span> </div>
     {/* <div>   <span className="employee_title"><p style={{margin:"0.8em"}}>${e.id}</p></span> </div> */}
     <div>   <span className="employee_title"><p style={{margin:"0.8em"}}>${e.restaurant}</p></span> </div>
     <div>   <span className="employee_title"><p style={{margin:"0.8em"}}>${e.ratings}</p></span> </div>
     </Link>
     {/* <button onClick={() => {
       
        handlefetch(food)
      }}>ADD TO CART</button> */}

     
      </div>
      
     
     
     </>

)

})}

    
    </div>
    </div>
  );

}