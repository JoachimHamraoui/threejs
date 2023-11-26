import React from 'react';
// import { Router } from 'react-router-dom';
const Navigation = ({modelCollection, loadModel}) => {
  return (
          <nav className='w-full bg-black p-8 font-display text-md flex-row text-white'>
          <ul className='w-1/3 flex'>
            {/* <li className='flex-auto flex items-center'>
              <Link to="/contact" className='transition-text duration-300 hover:text-green'>Contact</Link>
            </li> */}
            {modelCollection.map((model, modelIndex) => (
              <li className='flex-auto flex items-center'>
                <button className='transition-text duration-300 hover:text-green' key={modelIndex} onClick={() => loadModel(model.path)}>{model.name}</button>
              </li>
            ))}
            {/* <UploadLink /> */}
          </ul>
        </nav>
  );
}

export default Navigation;
