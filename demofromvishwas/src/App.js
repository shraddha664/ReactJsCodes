import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import React from "react";
import HookCounterFour from "./components/HookCounterFour";
import EventHandling from "./components/EventHandling";
import PassingFuncasProps from "./components/PassingFuncasProps";
import ConditionalRendering from "./components/ConditionalRendering";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Welcome from "./components/Welcome";
import Welcome1 from "./components/Welcome1";
import UseReducer from "./components/UseReducer";
function App() {
  // function getData(a){
  //   console.log(a);
  //   alert("hello from app component");
  // }
  return (
    <div className="App">
      <UseReducer/>
      {/* <Greet name="bruse" heroName="batman">
        <p>this is children props</p>
        <button>Submit</button>
      </Greet>
      <Greet name="clark " heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="diana" heroName="Wonder Woman" /> */}

      {/* hello component */}
      {/* <Hello />
       <HookCounterFour />
       <EventHandling/>
       <PassingFuncasProps data={getData}/>
      <ConditionalRendering/> */}
       {/* <Stylesheet/> */}
      {/* <NameList/> */}
      {/* <Welcome/> */}
      {/* <Welcome1 name="z"/> */}
      
    </div>
  );
  //without using JSX
  //return React.createElement("div", null, "Hello saru");
}

export default App;
