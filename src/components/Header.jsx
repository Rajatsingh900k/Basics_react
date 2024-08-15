import React from "react";
import { Link } from "react-router-dom";
const Header=()=>{
    return <>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
        </nav>
    </>
}
export default Header;