import React, { useEffect } from "react";
import { useState } from "react";
import {LOGO} from "./utils.js/constants";

const Header = () => {
const [state,setState]=useState("login")


  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO}
          alt="image logo"
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact us</li>
          <li>cart</li>
          <button className="header-login" onClick={()=>{setState(state=="login" ?"log-out":"login")}}>{state}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header