import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyMap from './Components/MyMap'

function App() {
  return (
    <div>
      <div className = "sideBar">
        <p>Hello!</p>
      </div>
      <div className="App">
        <MyMap />
      </div>
    </div>
  );
}

export default App;