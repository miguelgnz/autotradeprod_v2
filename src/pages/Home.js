import React, { Fragment } from 'react';

import Masthead from '../components/Masthead/Masthead';
import BrandsBanner from '../components/BrandsBanner';
import CarsGrid from '../components/CarsGrid/CarsGrid';

const Home = () => {
  return (
    <Fragment>
      <Masthead />
      <BrandsBanner />
      <CarsGrid />
    </Fragment>
  );
};

export default Home;
