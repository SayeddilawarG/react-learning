import {LOGO_URL} from "../Utils/constant"; 
import { useState } from "react";
const Header = () => {
  const[btnLogin, setBtnLogin] = useState("Login");
  const headingStyle = {
    title: {
      color: "white",
      margin: "0px 5px",
    },
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} />
      </div>
      <div style={headingStyle.title}>
        <h1>Welcome to Hello Resturant</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="Login" onClick={() => {
          btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
          console.log(btnLogin);
          }}>{btnLogin}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
