import { Link } from "react-router-dom";
import React from "react";

function Menu() {
  return (
    <div>
   
        <Link to="/multiply">Multi</Link>
        <Link to="/add">Adding</Link>
        <Link to="/sub">Sub</Link>
     
    </div>
  );
}

export default Menu;
