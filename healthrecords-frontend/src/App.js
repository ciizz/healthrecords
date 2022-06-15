import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ClientInfo } from './components/ClientInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <br/>
      <br/>
      <br/>
      <ClientInfo/>
    </div>
  );
}

export default App;
