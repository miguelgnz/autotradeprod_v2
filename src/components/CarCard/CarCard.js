import React, { useState, useEffect } from 'react';
import { GiGearStick, GiGasPump } from 'react-icons/gi';
import { FaTachometerAlt } from 'react-icons/fa';

import { ImageData } from './image-data';
import classes from './CarCard.module.css';

const CarCard = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={classes.mainSlider}>
      {ImageData.map((slide, index) => {
        return (
          <div
            className={
              index === current
                ? `${classes.slide} ${classes.active}`
                : `${classes.slide}`
            }
            key={index}
          >
            {index === current && (
              <img src={slide.url} alt='lel' className={classes.sliderImg} />
            )}
          </div>
        );
      })}
      <div className={classes.cardTitles}>
        <p className={classes.cardTitle} id={classes.carModel}>
          2018
        </p>
        <h3 className={classes.cardTitle} id={classes.carTitle}>
          TOYOTA HILUX
        </h3>
        <p className={classes.cardTitle}>Q199,000</p>
      </div>
      <div className={classes.cardIcons}>
        <div className={classes.cardIconElement}>
          <GiGearStick className={classes.cardIcon} />
          <p>Automático</p>
        </div>
        <div className={classes.cardIconElement}>
          <GiGasPump className={classes.cardIcon} />
          <p>Diesel</p>
        </div>
        <div className={classes.cardIconElement}>
          <FaTachometerAlt className={classes.cardIcon} />
          <p>25K KM</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
