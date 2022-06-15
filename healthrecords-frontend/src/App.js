import './App.css';
import React from 'react';
import { Pages } from './Pages';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <br/>
      <Pages/>
    </div>
  );
}

export default App;
