// App.js
// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navigation() {
  return (
    <Router>
      <div>
        <nav className='w-full bg-black p-8 fixed font-display text-md xl:flex flex-row sm:hidden text-white'>
          <ul className='w-1/3 flex'>
            <li className='flex-auto flex items-center'>
              <Link to="/" className='transition-text duration-300 hover:text-green'>Home</Link>
            </li>
            <li className='flex-auto flex items-center'>
              <Link to="/web" className='transition-text duration-300 hover:text-green'>Web</Link>
            </li>
            <li className='flex-auto flex items-center'>
              <Link to="/design" className='transition-text duration-300 hover:text-green'>Design</Link>
            </li>
            <li className='flex-auto flex items-center'>
              <Link to="/contact" className='transition-text duration-300 hover:text-green'>Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" />
          <Route path="/web" />
          <Route path="/web/project/:id" />
          <Route path="/design" />
          <Route path="/design/project/:id" />
          <Route path="/contact" />
        </Routes>
      </div>
    </Router>
  );
}

export default Navigation;
