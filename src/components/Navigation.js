import React from "react";

import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="Register">Register</a>
        </li>
        <li>
          <a href="Login">Login</a>
        </li>
        <li>
          <a href="VolcanoList">Volcano list</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
