import React from 'react';
import './App.css';
import Header from './components/Header'
import LandSection from './components/LandSection.js';
function App() {
  return (
    <div className="App" >
      <Header />
      <LandSection name="home"/>
    </div>
  );
}

export default App;
