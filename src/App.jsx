import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Career from "./components/Career";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestroCards from "./utils/RestroData";
import RestroMenu from "./components/RestroMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

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

// // JSX ==> Babble transpile into React.createElement("h1", { id: "child" }, "hello world 1")  ==> React Element ==> JS Object ==> HtmlElement(render)

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

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [CustomContext, setCustomContext] = useState("bhavesh");

  useEffect(() => {
    customProfile();
  }, []);

  const customProfile = async () => {
    setCustomContext("Bunny");
  };

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedUser: "Amit Purswani" }}>
        <div className="app-layout">
          <Navbar />
          <UserContext.Provider
            value={{ loggedUser: CustomContext, setCustomContext }}
          >
            <Outlet />
          </UserContext.Provider>
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading..</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restro/:resId",
        element: <RestroMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
