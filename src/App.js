import React from 'react';
import logo from './beveg-logo.png';
import './App.css';

import Button from './components/button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button btnName="create coupon" />
      </header>
    </div>
  );
}

export default App;
