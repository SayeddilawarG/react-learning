import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter } from "react-router-dom";

const AppLayout = () => {

  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />
    },
    {
      path:"/about",
      element:<About />
    }
  ]);
  return (
    <div className="app-layout">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
