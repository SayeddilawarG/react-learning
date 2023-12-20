import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [text,setText] = useState("Login");

  const handleLoginLogout=()=>{
    setIsLoggedIn(!isLoggedIn);
  }
  console.log("Header Component is Rendered Now ");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <button onClick={()=>
              text==="Login" ? setText("LogOut"):setText("Login")}>{text}</button>
          </ul>
        </div>
      </div>
    );
  };

export default Header;