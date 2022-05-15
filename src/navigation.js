import React from "react";

import "./navigation.css";

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="VolcanoList">Volcano list</a>
        </li>
        <li>
          <a href="Register">Register</a>
        </li>
        <li>
          <a href="Login">Login</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
