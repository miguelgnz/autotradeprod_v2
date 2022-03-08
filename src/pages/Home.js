import React, { Fragment } from 'react';

import BrandsBanner from '../components/BrandsBanner';
import CarsGrid from '../components/CarsGrid/CarsGrid';

const Home = () => {
  return (
    <Fragment>
      <BrandsBanner />
      <CarsGrid />
    </Fragment>
  );
};

export default Home;
