// const heading = React.createElement(
//   "h1",
//   { id: "heading", headingSize: "h1" },
//   "Namaste JavaScript!"
// );
// console.log(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "child" }, "I am H1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", { id: "child" }, "I am H2 tag")
  ),
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "child" }, "I am H1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", { id: "child" }, "I am H2 tag")
  ),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root1"));
console.log(root);

root.render(parent);
