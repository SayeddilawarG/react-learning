import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return(
    <div className="header">
      <div className="logo">
        <img src="https://i.pinimg.com/736x/81/68/a6/8168a6d3ca80a355fdbadb18b89a960a.jpg" />
      </div>
      <div className = "nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className="app-layout">
      <Header />
      {/* <Body /> */}
      {/* <Footer /> */}
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
