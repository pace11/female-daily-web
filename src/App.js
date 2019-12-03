import React from 'react';
import logo from './logo.svg';
import FemaleDaily from './assets/icons/FemaleDaily'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FemaleDaily />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
