import React from 'react';

 const EventHandling=()=>{
      const  clickHandler=(event)=>{
          event.preventDefault();
          console.log("Form is Submitted");
    //     console.log("Name is:",name);
    //     console.log("Event is:",event.type);
     }
    return (
        <div>
          {/* <button onClick={(e)=>clickHandler("codebucks",e)}>Function Button</button> */}
        <form onSubmit={(e)=>clickHandler(e)}>
            <input type="text" name="" id=""/>
            <button type="submit">Submit</button>
        </form>
        </div>
    );
     
} 
export default EventHandling;