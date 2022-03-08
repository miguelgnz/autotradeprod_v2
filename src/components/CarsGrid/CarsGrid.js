import React from 'react';
import { CarsData } from '../../components/CarCard/cars-data';
import CarCard from '../CarCard/CarCard';
import classes from './CarsGrid.module.css';

const CarsGrid = () => {
  return (
    <div className={classes.carsContainer}>
      {CarsData.map((car) => {
        return (
          <CarCard
            key={car.id}
            slides={car.images}
            year={car.year}
            title={car.title}
            price={car.price}
            transmission={car.transmission}
            fuel={car.fuel}
            mileage={car.mileage}
          />
        );
      })}
    </div>
  );
};

export default CarsGrid;
