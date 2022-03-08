import React, { useState, useEffect } from 'react';
import { GiGearStick, GiGasPump } from 'react-icons/gi';
import { FaTachometerAlt } from 'react-icons/fa';

import classes from './CarCard.module.css';

const CarCard = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const actualSlides = props.slides;

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
    <div className={classes.mainCard}>
      {actualSlides.map((slide, index) => {
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
              <img src={slide} alt='lel' className={classes.sliderImg} />
            )}
          </div>
        );
      })}
      <div className={classes.cardTitles}>
        <p className={classes.cardTitle} id={classes.carModel}>
          {props.year}
        </p>
        <h3 className={classes.cardTitle} id={classes.carTitle}>
          {props.title}
        </h3>
        <p className={classes.cardTitle}>{`Q${props.price}`}</p>
      </div>
      <div className={classes.cardIcons}>
        <div className={classes.cardIconElement}>
          <GiGearStick className={classes.cardIcon} />
          <p>{props.transmission}</p>
        </div>
        <div className={classes.cardIconElement}>
          <GiGasPump className={classes.cardIcon} />
          <p>{props.fuel}</p>
        </div>
        <div className={classes.cardIconElement}>
          <FaTachometerAlt className={classes.cardIcon} />
          <p>{`${props.mileage}K KM`}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
