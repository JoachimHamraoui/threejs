import React from 'react';
import { Route, Router, Routes, Link } from 'react-router-dom';
import ModelUploader from './ModelUploader'
const UploadLink = () => {
  return (
              <Router>
                <li className='flex-auto flex items-center'>
                    <Link to={"/upload"} className='transition-text duration-300 hover:text-green'>Upload</Link>
                </li>

                <Routes>
                    <Route path='/upload' element={<ModelUploader />}/>
                </Routes>

              </Router>
  );
}

export default UploadLink;
