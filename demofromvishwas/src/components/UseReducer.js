import React, { useReducer, useState } from "react";

const initialState=0;
 const reducer=(state,action)=>{
     if(action.type==="Increment"){
         return state+1;
     }
     if(action.type==="Decrement"){
        return state-1;
    }
     return state;
 }
const UseReducer=()=>{
    // const [count,setCount]=useState(0);


    const[count,dispatch]= useReducer(reducer,initialState);
    return(
        <div> 
            <p>{count}</p>
            <div className='btnStylePosition'>
                <button onClick={()=>dispatch({type:"Increment"})}>Inc</button>
                <br/>
                <button onClick={()=>dispatch({type:"Decrement"})}>Dec</button>
            </div>
        </div>
    )
}

export default UseReducer;