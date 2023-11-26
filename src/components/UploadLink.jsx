import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import ModelUploader from './ModelUploader'
const UploadLink = () => {
  return (
              <Router>
                <li className='flex-auto flex items-center'>
                    <button className='transition-text duration-300 hover:text-green'>Upload</button>
                </li>

                <Routes>
                    <Route path='/upload' element={ModelUploader}/>
                </Routes>

              </Router>
  );
}

export default UploadLink;
