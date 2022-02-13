import react, { useState } from "react";

const Hello = () => {
  // state for holding custom message
  const [data, setData] = useState(0);

  // let data = "saru";
  const updateData = () => {
    // data = "shraddha";
    // alert(data+1);
    setData(data + 1);
  };
  return (
    <div>
      <h1>hello {data}</h1>
      <button onClick={updateData}>update data</button>

      {/* display the message */}
    </div>
  );
};

export default Hello;
