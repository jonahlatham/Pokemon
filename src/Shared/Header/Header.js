import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className="App-header">
    <div className="header-item">
        <i className="fas fa-bars"/>
    </div>
    <div className="header-item img" style={{backgroundImage:`url(https://bit.ly/2DzFUHt)`}}/>
    <div className="header-item">
        <i className="fas fa-user"/>
    </div>
    </header>
)
}

export default Header;