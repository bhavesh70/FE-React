import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement("h1", { id: "child" }, "hello world 1")  ==> React Element ==> JS Object ==> HtmlElement
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

// JSX ==> Babale transpiles into React.createElement("h1", { id: "child" }, "hello world 1")  ==> React Element ==> JS Object ==> HtmlElement(render)

const jsxHeading = (
  <div id="jsxDiv">
    <h1 className="jsxChild" id="jsxId">
      Hello world
    </h1>
  </div>
); // Jsx element

const Title = () => <h1 className="title">Hello from functional component</h1>;

// Functional component
const HeadingComponent = () => (
  <div id="jsxDiv">
    <Title />
    <h2 className="jsxChild" id="jsxId">
      Hello world
    </h2>
  </div>
);

// const HeadingComponent = () => (
//     <div id="jsxDiv">
//       <Title />    <------------------------------ component composition composing component inside component
//       <h2 className="jsxChild" id="jsxId">
//         Hello world
//       </h2>
//     </div>
//   );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
