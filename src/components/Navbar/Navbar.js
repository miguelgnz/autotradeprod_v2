import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import classes from './Navbar.module.css';
import navbarLogo from '../../assets/logos/navbar-logo.svg';

const NAV_ITEMS = [
  {
    id: 1,
    title: 'Inicio',
    url: '/home',
  },
  {
    id: 2,
    title: 'Servicios',
    url: '/services',
  },
  {
    id: 3,
    title: 'Catálogo',
    url: '/catalog',
  },
  {
    id: 4,
    title: 'Contacto',
    url: '/social',
  },
  {
    id: 5,
    title: 'Nosotros',
    url: '/about',
  },
];

const Navbar = () => {
  const [barsClicked, setBarsClicked] = useState(false);

  const navigationItems = NAV_ITEMS.map((item) => {
    return (
      <li key={item.id} className={classes.navItem}>
        <NavLink to={item.url}>{item.title}</NavLink>
      </li>
    );
  });

  const navigationClasses = barsClicked
    ? `${classes.navItems} ${classes.active}`
    : `${classes.navItems}`;

  const handleClick = () => {
    setBarsClicked(!barsClicked);
  };

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
        <FontAwesomeIcon icon={barsClicked ? faXmark : faBars} />
      </div>
      <ul className={navigationClasses}>{navigationItems}</ul>
    </nav>
  );
};

export default Navbar;
