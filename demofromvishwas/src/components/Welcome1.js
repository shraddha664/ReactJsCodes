import React, { useEffect, useState } from 'react'

const Welcome1=(props)=>{
const [num,setNum]=useState(0);
const [nums,setNums]=useState(0);
const {name}=props;

useEffect(()=>{
alert('Hello' +name);
},[nums,num,props.name]);
    return(
        <div>
        <button onClick={()=>{setNum(num+1)}}>click me{num}</button>
        <br/>
        <button onClick={()=>{setNums(nums+1)}}>click me{nums}</button>
        </div>
        )
}

export default Welcome1;