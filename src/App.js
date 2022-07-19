import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Components/Page/Home';
import Pages from './Components/Page/Pages';
import Contact from './Components/Page/Contact';
import About from './Components/Page/About';

function App() {
  return (
    <div className="App">
      <div className='nav-bar'>
        <ul className='nav'>
          <li className='nav-item'>
            <Link to='/' className='text-list-item'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/page' className='text-list-item'>page</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='text-list-item'>Contact</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' className='text-list-item'>About</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page' element={<Pages />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
