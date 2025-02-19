import React from 'react';
import './App.css';

function App() {
  return (
    <div className="arcade-frame">
      <div className="screen">
        <h1>Retro Arcade</h1>
        <div className="button-container">
          <a href="/game1.html"><button className="pixel-button">Game 1</button></a>
          <a href="/game2.html"><button className="pixel-button">Game 2</button></a>
          <a href="/game3.html"><button className="pixel-button">Game 3</button></a>
        </div>
      </div>
    </div>
  );
}

export default App;
