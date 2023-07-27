import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home /</Link>
        <Link to="/FormOne">Form One /</Link>
        <Link to="/UserForm">User Form </Link>
      </nav>
    </div>
  );
};

export default Header;
