import React from "react";
import { Navbar as StyledNavbar } from "../../styles/Styles";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link className="nav-item" to="/">
        FRIENDS
      </Link>
      <Link className="nav-item" to="/addfriend">
        ADD FRIEND
      </Link>
    </StyledNavbar>
  );
}
