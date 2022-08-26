import React from "react";
import './Buttons.css'

function Buttons(props)
{
    return<div className="btn">
        <button>{props.Buttons}</button>
        </div>
}

export default Buttons