import { createContext } from "react";
import { useState } from "react";
export const CartContext= createContext()

export const CartContextProvider=({children}) => {
          const [cart,setValue] = useState(0)
           
   const handlevalue= (val) => {
       setValue(val)
   }

          return (
              <CartContext.Provider value={{cart,handlevalue}}>
                     {children}
              </CartContext.Provider>
          )
}