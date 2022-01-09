import { Link } from "@mui/material";
import React from "react";

function Menu() {
  return (
    <div>
      <nav>
        <Link to="/mult">Multi</Link>
        <Link to="/add">Adding</Link>
      </nav>
    </div>
  );
}

export default Menu;
