import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Services from './pages/Services';
import Catalog from './pages/Catalog'
import Contact from './pages/Contact'
import About from './pages/About'

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/catalogo' element={<Catalog />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/nosotros' element={<About />} />
        </Routes>
      </main>
      <footer></footer>
    </Fragment>
  );
}

export default App;
