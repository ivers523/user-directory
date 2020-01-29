import React from "react";
import "./Button.css"



const Button = props => (
<span onClick={() => props.sortUsers(props.name)} className="sort">
Display Executives
</span>);


export default Button;
