import React, { useState, useEffect } from 'react';
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
        <h3>2018</h3>
        <h1>Toyota Hilux</h1>
        <h3>Q199,000</h3>
      </div>
    </div>
  );
};

export default CarCard;
