import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

import classes from './Navbar.module.css';
import navbarLogo from '../../assets/logos/navbar-logo.svg';

const NAV_ITEMS = [
  {
    id: 1,
    title: 'Inicio',
    url: '/',
  },
  {
    id: 2,
    title: 'Servicios',
    url: '/servicios',
  },
  {
    id: 3,
    title: 'Catálogo',
    url: '/catalogo',
  },
  {
    id: 4,
    title: 'Contacto',
    url: '/contacto',
  },
  {
    id: 5,
    title: 'Nosotros',
    url: '/nosotros',
  },
];

const Navbar = () => {
  const [barsClicked, setBarsClicked] = useState(false);

  const handleClick = () => {
    setBarsClicked(!barsClicked);
  };

  const navigationItems = NAV_ITEMS.map((item) => {
    return (
      <li key={item.id} className={classes.navItem}>
        <NavLink onClick={handleClick} to={item.url}>
          {item.title}
        </NavLink>
      </li>
    );
  });

  const navigationClasses = barsClicked
    ? `${classes.navItems} ${classes.active}`
    : `${classes.navItems}`;

  return (
    <nav>
      <div className={classes.navBrand}>
        <a href='#'>
          <img src={navbarLogo} />
        </a>
        <a href='#' className={classes.navTitle}>
          AUTOTRADE <span id={classes.afterTitle}>GT</span>
        </a>
      </div>
      <div className={classes.menuIcon} onClick={handleClick}>
        <Hamburger
          size={25}
          toggled={barsClicked}
          toggle={setBarsClicked}
          distance='lg'
          duration={0.4}
          easing='ease'
        />
      </div>
      <ul className={navigationClasses}>{navigationItems}</ul>
    </nav>
  );
};

export default Navbar;
