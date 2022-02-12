import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import {v4 as uuid} from 'uuid'

export const Grocery = ()=>{
    var [item,setItems] = useState([])

    var hndel = (listData)=>{
        var payload = {
            title : listData,
            id : uuid(),
            status : false
        }
        setItems([...item, payload])
    }

    
    const delList =(id)=>{
        
           // console.log("Nothing",id,item)
            var newList = item.filter((e)=>{
                return e.id!==id;
            })

            setItems(newList)
           // console.log( "id",id)
            
    }
    return (
        <div>
            
            <GroceryInput h={hndel} />

            {item.map((e)=>{
                return <GroceryList delList={delList} key={e.id} ti={e.title} id={e.id} status={e.status} /> 
            })}
             
            
        </div>
    )
}