import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
    </Fragment>
  );
}

export default App;
