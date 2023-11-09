import React from "react";
import ReactDOM from "react-dom";

/* Swiggy Component requirements
* Header
    -logo
    -Nav Items
* Body
    -search
    *RestaurantContainer
        -RestaurantCards
* Footer
    -Copyright
    -Links
    -Address
    -Contact
*/
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

console.log(heading);

// RFC is just like a normal javascript function which returns a piece of JSX

//Functional component (RFC)

const Title = function () {
  return <h3>Title </h3>;
};
const MyHeader = () => {
  return <h2>Heading component by using functional component</h2>;
};

const Header = () => (
  <div>
    <MyHeader />
    {/* {all these 3 titles are same } */}
    {Title()}
    <Title /> //
    <Title></Title> //
    <h2>Heading componentt</h2>
  </div>
);

const jsxHeading = <h1 id="heading">Namaste React by JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", headingSize: "h1" },
//   "Namaste JavaScript!"
// );
// console.log(heading);

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement("h1", { id: "child" }, "I am H1 tag")
//   ),
//   React.createElement(
//     "div",
//     { id: "child2" },
//     React.createElement("h2", { id: "child" }, "I am H2 tag")
//   ),
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement("h1", { id: "child" }, "I am H1 tag")
//   ),
//   React.createElement(
//     "div",
//     { id: "child2" },
//     React.createElement("h2", { id: "child" }, "I am H2 tag")
//   ),
// ]);

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root1"));
// console.log(root);

// root.render(parent);
