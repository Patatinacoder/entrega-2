
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import "./styles.css";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/category/Movies'>Movies</Link>
                <Link to='/category/Series'>Series</Link>
                <Link to='/category/Documentals'>Documentals</Link>
            </li>

            <CartWidget />
        </ul>
    );
};

export default NavBar;