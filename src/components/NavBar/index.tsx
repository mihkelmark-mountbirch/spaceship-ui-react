import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const NavBar = () => {
  return (
    <div>
      <div className="link">
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="passengers">Passengers</Link>
      </div>
      <div className="link">
        <Link to="spaceships">Spaceships</Link>
      </div>
    </div>
  );
};

export default NavBar;
