import './App.css';
import Navigation from './components/Navigation';
import CanvasComponent from './components/Canvas';
import KingdomKey from './models/Kingdomkey';
import KoiFish from './models/Koi';
import Madara from './models/Madara';
import ShintoShrine from './models/Shinto';

import React from 'react';

const App = () => {

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

  return (
    <div>
      <Navigation className='relative' modelCollection={modelCollection} />
     <CanvasComponent />
    </div>
  );
};

export default App;
