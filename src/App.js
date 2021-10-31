import React from 'react';

import './App.css';
import Header from './components/Header'
import LandSection from './components/LandSection.js';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import OurTeam from './components/Ourteam';
function App() {
  return (
    <div className="App" >
      <Header />
      <LandSection />
      <Services />
      <Portfolio />
      <OurTeam />
    </div>
  );
}

export default App;
