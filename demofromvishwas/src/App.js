import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import React from "react";
import HookCounterFour from "./components/HookCounterFour";

function App() {
  return (
    <div className="App">
      <Greet name="bruse" heroName="batman">
        <p>this is children props</p>
        <button>Submit</button>
      </Greet>
      <Greet name="clark " heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="diana" heroName="Wonder Woman" />

      {/* hello component */}
      <Hello />
      <HookCounterFour />
    </div>
  );
  //without using JSX
  //return React.createElement("div", null, "Hello saru");
}

export default App;
