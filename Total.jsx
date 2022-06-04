import { createContext } from "react";
import { useState } from "react";
export const TotalContext= createContext()

export const TotalContextProvider=({children}) => {
          const [cart1,setValue1] = useState(0)
           
   const handlevalue1= (val1) => {
       setValue1(cart1+val1)
   }

          return (
              <TotalContext.Provider value={{cart1,handlevalue1}}>
                     {children}
              </TotalContext.Provider>
          )
}