 const PassingFuncasProps=(props)=>{
     console.log(props.data);

     function handleget(){
         props.data(3);
     }
     return(
         <div>
             <h1>user component</h1>
             <button onClick={()=>props.data(3)}>Call function</button>
         </div>
     )
 }

 export default PassingFuncasProps;