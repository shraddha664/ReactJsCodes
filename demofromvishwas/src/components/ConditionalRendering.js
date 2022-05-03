import {useState} from "react";
const ConditionalRendering=()=>{
    const [loggedIn,setLoggedIn]=useState(3);
   return(
    //    <div>
    //        {loggedIn?<h1>Welcome shraddha</h1>:<h1>welcome guest</h1>}
    //    </div>
//checking multiple conditions
<div>
{loggedIn==1?<h1>Welcome user1</h1>:loggedIn==2?<h1>welcome user2</h1>:<h1>welcome user3</h1>}
</div>
   )

    //not recommended method
    // if(loggedIn){
    //     return(
    //         <di>
    //           <h1>Welcome saru</h1>
    //         </di>
    //     ) 
    // }
    // else{
    //     return(
    //         <di>
    //           <h1>Welcome guest</h1>
    //         </di>
    //     ) 
    // }
   
}
export default ConditionalRendering;