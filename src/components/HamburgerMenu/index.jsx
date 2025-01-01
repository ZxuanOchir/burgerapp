import React from 'react'
import css from './style.module.css'


export default function HamburgerMenu(props) {
  return (
    <div className={css.HamburgerMenu} 
         onClick={props.toggleSideBar}>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}
