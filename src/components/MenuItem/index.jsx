import React from "react";
import css from './style.module.css';
import { NavLink } from "react-router-dom";

const MenuItem = (props) => {
    return (
        <li className={css.MenuItem}>
            <NavLink
                className={({ isActive }) => (isActive ? css.active : undefined)}
                to={props.link}
            >
                {props.children}
            </NavLink>
        </li>
    );
}

export default MenuItem;
