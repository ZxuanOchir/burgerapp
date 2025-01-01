import React from 'react'
import css from './style.module.css'
import Logo from '../Logo';
import Menu from '../Menu';
import HamburgerMenu from '../HamburgerMenu';

const Toolbar = (props) => {
  return (
    <header className={css.Toolbar}>
      <HamburgerMenu toggleSideBar={props.toggleSideBar}/>
      <Logo />
      <nav className={css.HideOnMobile}>
        <Menu />
      </nav>
    </header>
  );
}
/* nemej display query bicih buildControls */
export default Toolbar;
