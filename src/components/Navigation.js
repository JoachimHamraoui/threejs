// App.js
// import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

const Navigation = ({modelCollection}) => {
  return (
        <nav className='w-full bg-black p-8 font-display text-md flex-row text-white'>
          <ul className='w-1/3 flex'>
            {/* <li className='flex-auto flex items-center'>
              <Link to="/contact" className='transition-text duration-300 hover:text-green'>Contact</Link>
            </li> */}
            {modelCollection.map((model, modelIndex) => (
              <li className='flex-auto flex items-center' key={modelIndex}>
                <Link to="/contact" className='transition-text duration-300 hover:text-green'>{model.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
  );
}

export default Navigation;
