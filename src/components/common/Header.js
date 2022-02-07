import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const activeStyle = { color: "#F15B2A"};

    return (
        <nav>
        <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle} exact>About</NavLink>
        {" | "}
        <NavLink to="/speakers" activeStyle={activeStyle} exact>Speakers</NavLink>
        </nav>
    );
}

export default Header;