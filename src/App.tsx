import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('Hey');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The breaking change didn't work, why? I've changed this text and the semantic-release didn't detect it...
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
