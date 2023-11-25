import './App.css';
import Navigation from './components/Navigation';
import CanvasComponent from './components/Canvas';
import KingdomKey from './models/Kingdomkey';
import KoiFish from './models/Koi';
import Madara from './models/Madara';
import ShintoShrine from './models/Shinto';

import React, { useState } from 'react';

const App = () => {

  const [selectModel, setSelectModel] = useState(null);

  const modelCollection = [
    {
      name: "Kingdom",
      path: <KingdomKey />
    },
    {
      name: "Koi",
      path: <KoiFish />
    },
    {
      name: "Madara",
      path: <Madara />
    },
    {
      name: "Shinto",
      path: <ShintoShrine />
    },
  ]

  const loadModel = (modelPath) => {
    if (modelPath !== selectModel) {
      setSelectModel(modelPath);
    }
  }

  return (
    <div>
      <Navigation className='relative' modelCollection={modelCollection} loadModel={loadModel} />
     <CanvasComponent />
    </div>
  );
};

export default App;
