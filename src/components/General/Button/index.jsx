import React from "react";
import css from './style.module.css';


const Button = (props) => {
    return (
        <button onClick={props.clicked} className={`${css.Button} ${css[props.type]}`}>{props.text}</button>
    )
}

export default Button;