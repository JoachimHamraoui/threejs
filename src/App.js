import './App.css';

import React from 'react';
import ModelUploader from './components/ModelUploader';

const App = () => {
  return (
    <div className="App">
      <div className='App-header'>
      <h1>Upload and Display 3D Models</h1>
      <ModelUploader />
      </div>
    </div>
  );
};

export default App;
