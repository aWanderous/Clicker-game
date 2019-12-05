import React from 'react';
import '../styles/Navbar.css';


const score = 10;
let highScore = 0 ;

function higherScore() {
    if (score > highScore) {
        highScore = score
    }
    return highScore;
};
higherScore();

function Navbar() {
    return (
        <nav className="navbar">
            <span id="title">Clickers Game</span>
            <span id="score">Current Score: {score}</span>
            <span id="topScore">Highest Score: {highScore}</span>
        </nav>
    );
};


export default Navbar;
