import React from "react";

//
// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//         hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//destructuring props in the parameters
// const Greet = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         hello {name} a.k.a {heroName}
//       </h1>
//       {/* {props.children} */}
//     </div>
//   );
// };

//destructuring props in the function body
// const Greet = (props) => {
//   const { name, heroName } = props;
//   return (
//     <div>
//       <h1>
//         hello {name} a.k.a {heroName}
//       </h1>
//       {/* {props.children} */}
//     </div>
//   );
// };

//destructuring object
const Greet = () => {
  const employee = {
    id: "ABC",
    name: "anthony",
    salary: "10",
    address: {
      street: "210 washington street",
      country: "canada",
      province: "ontario",
      zones: {
        plantZone: "7B",
        alienZone: "41",
      },
    },
  };
  const { name, id, salary, address } = employee;
  const { street, country, province, zones } = address;
  const { plantZone, alienZone } = zones;
  return (
    <div>
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>
        The employee address is:{street},{country},{province}
      </h2>
      <h2>
        {plantZone}and{alienZone}
      </h2>
    </div>
  );
};
export default Greet;
