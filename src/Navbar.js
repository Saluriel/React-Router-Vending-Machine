import React from "react";
import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                Vending Machine
            </NavLink>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
            <NavLink exact to="/soda">
                Soda
            </NavLink>
            <NavLink exact to="/surprise">
                Surprise!
            </NavLink>
        </nav>
    )
}

export default Navbar;