import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";
import card from "./assets/restro-card.jpg";

// // React.createElement("h1", { id: "child" }, "hello world 1")  ==> React Element ==> JS Object ==> HtmlElement
// const heading = [
//   React.createElement(
//     "div",
//     { id: "parent1" },
//     React.createElement("h1", { id: "child" }, "hello world 1")
//   ),
//   React.createElement("h2", { id: "parent2" }, [
//     React.createElement("h2", { id: "child1" }, "hello world2"),
//     React.createElement("h3", { id: "child2" }, "hello world3"),
//   ]),
// ];

// // JSX ==> Babale transpiles into React.createElement("h1", { id: "child" }, "hello world 1")  ==> React Element ==> JS Object ==> HtmlElement(render)

// const jsxHeading = (
//   <div id="jsxDiv">
//     <h1 className="jsxChild" id="jsxId">
//       Hello world
//     </h1>
//   </div>
// ); // Jsx element

// const Title = () => <h1 className="title">Hello from functional component</h1>;

// // Functional component
// const HeadingComponent = () => (
//   <div id="jsxDiv">
//     <Title />
//     <h2 className="jsxChild" id="jsxId">
//       Hello world
//     </h2>
//   </div>
// );

// // const HeadingComponent = () => (
// //     <div id="jsxDiv">
// //       <Title />    <------------------------------ component composition composing component inside component
// //       <h2 className="jsxChild" id="jsxId">
// //         Hello world
// //       </h2>
// //     </div>
// //   );

const Navbar = () => (
  <div className="nav-bar">
    <div className="logo">
      <img src={logo} />
    </div>

    <ul className="navbar">
      <li>home</li>
      <li>about</li>
      <li>menu</li>
      <li>career</li>
      <li>contact us</li>
    </ul>
  </div>
);


const Cards = () => (
  <div className="body">
  <div className="cards">
    <img className="card-image" src={card} />
    <div className="details">
      <div className="title-star">
        <h2 className="title">Foo Ahmedabad</h2>
        <h2 className="stars">4.3</h2>
      </div>
      <div className="menu-price">
        <p className="menu">
          chinese, south-indian, italian, gujarati, panjabi
        </p>
        <h3 className="price">$ 10</h3>
      </div>
      <div className="address">
        <h4 className="area">Thaltej, Ahmedabad</h4>
        <h4 className="distance">4.3km</h4>
      </div>
    </div>
  </div>
</div>
);

const Body = () => (
  <div className="all-cards">
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  <Cards/>
  </div>
);

const AppLayout = () => (
  <div className="app-layout">
    <Navbar />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
