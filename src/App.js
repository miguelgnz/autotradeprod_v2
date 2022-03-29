import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Squash as Hamburger } from 'hamburger-react';

import Home from './pages/Home';
import Services from './pages/Services';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/inicio' element={<Home />} />
          <Route path='/servicios' element={<Services />} />
        </Routes>
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
