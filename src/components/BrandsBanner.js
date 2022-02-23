import React from 'react';
import classes from './BrandsBanner.module.css';

import 'car-makes-icons/dist/style.css';

const BrandsBanner = () => {
  return (
    <div>
      <div className={classes.title}>
        <h2>Las mejores marcas disponibles</h2>
      </div>
      <div className={classes.brandsBanner}>
        <i className='car-toyota' />
        <i className='car-mitsubishi' />
        <i className='car-volkswagen' />
        <i className='car-nissan' />
        <i className='car-isuzu' />
        <i className='car-bmw' />
        <i className='car-mazda' />
        <i className='car-kia' />
        <i className='car-chevrolet' />
        <i className='car-hyundai' />
      </div>
    </div>
  );
};

export default BrandsBanner;
