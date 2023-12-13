import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import resList from "./utils/mockData.js";

const App = () => {
 
  return (
    <div className="App">
      <Header />
      <Body resList = {resList}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);