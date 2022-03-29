import React from 'react';

import classes from './Masthead.module.css';
import car from '../../assets/other-images/hilux_masthead.png';

const Masthead = (props) => {
  return (
    <div className={classes.mainMasthead}>
      <div className={classes.mastheadText}>
        <h2>Aseguramos tu compra!</h2>
      </div>
      <div className={classes.mastheadImg}>
        <img alt='masthead' src={car}></img>
      </div>
    </div>
  );
};

export default Masthead;
