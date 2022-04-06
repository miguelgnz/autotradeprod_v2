import React from 'react';

import classes from './Masthead.module.css';
import car from '../../assets/other-images/hilux_masthead.png';

const Masthead = (props) => {
  return (
    <div className={classes.mainMasthead}>
      <div className={classes.mastheadText}>
        <h2>Aseguramos tu compra!</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <img alt='masthead' src={car}></img>
    </div>
  );
};

export default Masthead;
