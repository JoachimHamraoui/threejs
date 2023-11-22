import './App.css';

import React from 'react';
import ModelUploader from './components/ModelUploader';

const App = () => {
  return (
    <div className="bg-black text-white fixed">
      <h1>Upload and Display 3D Models</h1>
      <ModelUploader />
    </div>
  );
};

export default App;
