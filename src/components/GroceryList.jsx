import { useEffect, useState } from "react";

export const GroceryList =({ti,id,status,delList} )=>{

       
        
    
    
    
    return (
        <ul>
           <h1>
               {ti} <button onClick={()=>{
                    delList(id)
               }}>Delete</button>
           </h1>
        </ul>
      );
}