import './App.css';
import Navigation from './components/Navigation';
import CanvasComponent from './components/Canvas';
import KingdomKey from './genModels/Kingdomkey';
import Koi from './genModels/Koi';
import Madara from './genModels/Madara';
import ShintoShrine from './genModels/Shinto';
import Manor from './genModels/Manor';

import React, { useState } from 'react';

const App = () => {

  const [selectedModel, setSelectedModel] = useState(null);
  const [loadingError, setLoadingError] = useState(null);

  const modelCollection = [
    {
      name: "Kingdom",
      path: <KingdomKey />
    },
    {
      name: "Madara",
      path: <Madara />
    },
    {
      name: "Shinto",
      path: <ShintoShrine />
    },
    {
      name: "Manor",
      path: <Manor />
    }
  ]

  const loadModel = (modelPath) => {
    if (modelPath !== selectedModel) {
      setSelectedModel(modelPath);
    }
  }

  return (
    <div>
      <Navigation className='relative' modelCollection={modelCollection} loadModel={loadModel} />
     <CanvasComponent selectedModel={selectedModel}
        loadingError={loadingError}
        setSelectedModel={setSelectedModel}
        setLoadingError={setLoadingError} />
    </div>
  );
};

export default App;
