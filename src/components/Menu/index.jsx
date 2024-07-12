import React from "react";
import MenuItem from "../MenuItem";
import css from './style.module.css'

const Menu = () => {

    return (
        <div>
            <ul className={css.Menu}>
                <MenuItem active link="/"> 
                ШИНЭ ЗАХИАЛГА
                </MenuItem>
                <MenuItem  link="/orders"> 
                ЗАХИАЛГАНУУД
                </MenuItem>
                <MenuItem link="/login">
                НЭВТРЭХ
                </MenuItem>
            </ul>
        </div>
    )
}


export default Menu;
