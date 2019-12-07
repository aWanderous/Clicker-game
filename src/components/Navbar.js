import React from 'react';
import '../styles/Navbar.css';

function Navbar({ score, highScore }) {
    return (
      <nav className="navbar">
            <span className="title">Clickers Game</span>
            <span id="score">Current Score: {score}</span>
            <span id="topScore">Highest Score: {highScore}</span>
        </nav>
    );
};


export default Navbar;
