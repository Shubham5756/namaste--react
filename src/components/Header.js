import React, { useEffect } from "react";
import { useState } from "react";
import { LOGO, userContext } from "./utils.js/constants";
import { Link } from "react-router";
import useOnlineStatus from "./utils.js/useOnlineStatus";
import { useContext } from "react";

const Header = () => {
  const [state, setState] = useState("login");

  const onlineStatus = useOnlineStatus();
  const userName = useContext(userContext);
  console.log(userName);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="w-40">
        <img src={LOGO} alt="image logo" />
      </div>
      <div className="flex justify-between ">
        <ul className="flex items-center ">
          <li className="px-4">onlineStatus: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/home"}>home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>about us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>contact us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>grocery</Link>
          </li>
          <li className="px-4">cart</li>
          <li className="px-4">
            <button
              className="px-4 bg-green-200 m-2 rounded-sm hover:cursor-pointer"
              onClick={() => {
                setState(state == "login" ? "log-out" : "login");
              }}
            >
              {state}
            </button>
          </li>
          <li>{userName.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
