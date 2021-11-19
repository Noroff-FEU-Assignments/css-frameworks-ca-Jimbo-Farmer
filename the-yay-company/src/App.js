import './sass/style.scss';
import React from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
      <div className="whole-page">
        <div className="wrapper">
          <Navigation/>
        </div>
        <Footer/>
      </div>
  );
}

export default App;
