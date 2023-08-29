import React from 'react';
import ThreeScene from './components/ThreeScene';
import PortfolioAccordion from './components/PortfolioAccordion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <ThreeScene/>
      <PortfolioAccordion/>
      <Footer/>
      <div className="spacer"></div>
    </div>
  );
}

export default App;
