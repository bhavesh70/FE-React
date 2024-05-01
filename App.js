import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = [
  React.createElement(
    "div",
    { id: "parent1" },
    React.createElement("h1", { id: "child" }, "hello world 1")
  ),
  React.createElement("h2", { id: "parent2" }, [
    React.createElement("h2", { id: "child1" }, "hello world2"),
    React.createElement("h3", { id: "child2" }, "hello world3"),
  ]),
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


