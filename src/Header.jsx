import React from "react";
import './Header.css'

function Header ()
{
    return <div className="header-div">
        
        <a href="Dev">DEV@Deakin</a>
        <a href="post">Post</a>
        <a href="login">Login</a>
        <input type="text" placeholder="Search.."></input>
        </div>
}

export default Header