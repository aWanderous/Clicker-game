import React from 'react';
import '../styles/Header.css';

function Header({message}) {
    return (
        <div id="header">
            <div className="container">
                <h2 id="message">{message}</h2>
            </div>
        </div>
    );
};

export default Header;
