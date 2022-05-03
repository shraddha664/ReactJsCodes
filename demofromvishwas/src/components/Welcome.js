import React,{Component, useState} from 'react'

function Welcome(){
    const nameStateVariable=useState("Saru");
    // or can be destructured and used
    // updating state variable

    const [name,setName]=useState("saru");
    
    const [subject,setSubject]=useState([{sub:"math"}]);
const [roll,setRoll]=useState(101);
    const handleClick=()=>{
    nameStateVariable[1]("Shraddha");
    setName("Shraddha Parajuli");
    setRoll(22);
}
    
return(
    <div>
    <h1>name:{nameStateVariable[0]}</h1>
    <h2>Roll:{roll}</h2>
    <button type="button" onClick={handleClick}>Change</button>
    </div>
)
}
export default Welcome;