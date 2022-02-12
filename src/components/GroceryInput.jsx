import { useState } from "react"

export const GroceryInput = ({h})=>{
    const [inputData ,setInputData] = useState("");
     
    
    return (
        <div>
            <input type="text" onInput={((e)=>{setInputData(e.target.value)})}/>
            <button onClick={
                ()=>{
                       h(inputData)
                }
            }>Add Grocery</button>
        </div>
    )
}